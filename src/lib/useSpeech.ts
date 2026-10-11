'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

function getEnglishVoices(): SpeechSynthesisVoice[] {
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en'));
  const preferred = voices.filter(
    (v) => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Alex') || v.name.includes('Natural')
  );
  return [...preferred, ...voices.filter((v) => !preferred.includes(v))];
}

function createUtterance(text: string, rate: number, voice?: SpeechSynthesisVoice) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1;
  if (voice) utterance.voice = voice;
  return utterance;
}

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string, rate = 0.9) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    // Pick English voice if available
    const utterance = createUtterance(text, rate, getEnglishVoices()[0]);

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  return { speak, stop, speaking };
}

/**
 * Plays a list of lines back-to-back. Each line can pick a voice slot
 * (e.g. one per speaker) so a dialog sounds like two different people.
 */
export function useSpeechQueue() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const runRef = useRef(0);

  const stop = useCallback(() => {
    runRef.current++;
    window.speechSynthesis?.cancel();
    setCurrentIndex(-1);
  }, []);

  const playAll = useCallback((lines: { text: string; voiceSlot?: number }[], rate = 0.9) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || lines.length === 0) return;

    window.speechSynthesis.cancel();
    const run = ++runRef.current;
    const voices = getEnglishVoices();

    lines.forEach((line, i) => {
      const voice = voices.length ? voices[(line.voiceSlot ?? 0) % voices.length] : undefined;
      const utterance = createUtterance(line.text, rate, voice);
      utterance.onstart = () => {
        if (runRef.current === run) setCurrentIndex(i);
      };
      utterance.onend = () => {
        if (runRef.current === run && i === lines.length - 1) setCurrentIndex(-1);
      };
      // Fires when interrupted (e.g. another speak() cancels the queue)
      utterance.onerror = () => {
        if (runRef.current === run) setCurrentIndex(-1);
      };
      window.speechSynthesis.speak(utterance);
    });
  }, []);

  useEffect(() => () => {
    runRef.current++;
    window.speechSynthesis?.cancel();
  }, []);

  return { playAll, stop, currentIndex, playing: currentIndex >= 0 };
}
