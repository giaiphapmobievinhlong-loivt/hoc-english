'use client';

import { useState, useRef, use, useCallback, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTopics } from '@/data';
import { Phrase } from '@/data/types';
import { cn } from '@/lib/cn';
import {
  ChevronRight, Mic, MicOff, Volume2, ChevronLeft, ChevronRight as ChevronR,
  CheckCircle2, XCircle, AlertCircle, RotateCcw, Loader2
} from 'lucide-react';
import { markItemComplete } from '@/lib/progress';
import { useSpeech } from '@/lib/useSpeech';

type Params = Promise<{ topicId: string; contextId: string }>;

interface FeedbackWord {
  word: string;
  status: 'correct' | 'wrong' | 'close' | 'missing';
}

interface PronunciationFeedback {
  score: number;
  words: FeedbackWord[];
  tips: string[];
  transcript: string;
}

function comparePronunciation(original: string, transcript: string): PronunciationFeedback {
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z\s']/g, '').trim();
  const origWords = normalize(original).split(/\s+/);
  const transWords = normalize(transcript).split(/\s+/);

  const words: FeedbackWord[] = origWords.map((word) => {
    const found = transWords.find((t) => t === word);
    if (found) return { word, status: 'correct' };
    const similar = transWords.find((t) => {
      if (Math.abs(t.length - word.length) > 2) return false;
      let diff = 0;
      const len = Math.max(t.length, word.length);
      for (let i = 0; i < len; i++) if (t[i] !== word[i]) diff++;
      return diff <= 2;
    });
    if (similar) return { word, status: 'close' };
    return { word, status: 'wrong' };
  });

  const correct = words.filter((w) => w.status === 'correct').length;
  const close = words.filter((w) => w.status === 'close').length;
  const score = Math.round(((correct + close * 0.5) / origWords.length) * 100);

  const tips: string[] = [];
  const wrongWords = words.filter((w) => w.status === 'wrong' || w.status === 'close').map((w) => w.word);
  if (wrongWords.length > 0) tips.push(`Luyện lại các từ: "${wrongWords.slice(0, 3).join('", "')}"`);
  if (score >= 90) tips.push('Xuất sắc! Phát âm rất tốt.');
  else if (score >= 70) tips.push('Tốt! Hãy tập trung vào những từ được đánh dấu vàng.');
  else if (score >= 50) tips.push('Cần luyện thêm. Nghe lại và nói chậm hơn.');
  else tips.push('Hãy nghe thật kỹ rồi nói từng từ một.');

  return { score, words, tips, transcript };
}

function PlaybackButton({ audioUrl }: { audioUrl: string | null }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => () => { audioRef.current?.pause(); }, []);

  if (!audioUrl) return null;

  function handlePlay() {
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
      return;
    }
    const audio = new Audio(audioUrl!);
    audioRef.current = audio;
    audio.onended = () => setPlaying(false);
    audio.onpause = () => setPlaying(false);
    audio.play().then(() => setPlaying(true)).catch(() => {});
  }

  return (
    <button
      onClick={handlePlay}
      className={cn(
        'flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border transition-colors',
        playing
          ? 'bg-blue-500/20 border-blue-500/30 text-blue-400 animate-pulse'
          : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20'
      )}
    >
      <Volume2 size={14} />
      {playing ? 'Đang phát...' : 'Nghe lại giọng bạn'}
    </button>
  );
}

async function startMediaRecorder(
  onStop: (url: string) => void
): Promise<MediaRecorder | null> {
  if (typeof window === 'undefined' || !navigator.mediaDevices) return null;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
      onStop(URL.createObjectURL(blob));
      stream.getTracks().forEach((t) => t.stop());
    };
    recorder.start();
    return recorder;
  } catch {
    return null;
  }
}

function PhraseCard({
  phrase, topicId, contextId, onNext, onPrev, index, total
}: {
  phrase: Phrase;
  topicId: string;
  contextId: string;
  onNext: () => void;
  onPrev: () => void;
  index: number;
  total: number;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const { speak, speaking } = useSpeech();

  useEffect(() => () => { if (audioUrl) URL.revokeObjectURL(audioUrl); }, [audioUrl]);

  const startRecording = useCallback(async () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ ghi âm. Hãy dùng Chrome.');
      return;
    }
    setAudioUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });

    mediaRecorderRef.current = await startMediaRecorder((url) => setAudioUrl(url));

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.onstart = () => {
      setIsRecording(true);
      setFeedback(null);
    };

    recognition.onresult = (event) => {
      setIsProcessing(true);
      const transcript = event.results[0][0].transcript;
      setTimeout(() => {
        const fb = comparePronunciation(phrase.english, transcript);
        setFeedback(fb);
        setAttempts((a) => a + 1);
        setIsProcessing(false);
        if (fb.score >= 80) {
          markItemComplete(topicId, contextId, 'speaking', phrase.id, fb.score);
        }
      }, 400);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      setIsProcessing(false);
      if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop();
    };

    recognition.onend = () => {
      setIsRecording(false);
      if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop();
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [phrase, topicId, contextId]);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop();
    setIsRecording(false);
  }, []);

  function reset() {
    setFeedback(null);
  }

  const scoreColor = feedback
    ? feedback.score >= 80 ? 'text-green-400' : feedback.score >= 60 ? 'text-yellow-400' : 'text-red-400'
    : '';

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-white/40 mb-2">
        <span>Câu {index + 1} / {total}</span>
        <span>{attempts} lần thử</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 progress-bar" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {/* Phrase Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Hãy nói câu này:</p>
        <p className="text-xl font-semibold text-white leading-relaxed mb-2">{phrase.english}</p>
        <p className="text-white/50">{phrase.vietnamese}</p>
        {phrase.phonetic && (
          <p className="text-blue-400/70 text-sm font-mono mt-2">{phrase.phonetic}</p>
        )}
        <button
          onClick={() => speak(phrase.english, 0.8)}
          className={`mt-3 flex items-center gap-2 text-sm transition-colors ${speaking ? 'text-blue-300 animate-pulse' : 'text-blue-400 hover:text-blue-300'}`}
        >
          <Volume2 size={16} />
          {speaking ? 'Đang phát...' : 'Nghe mẫu'}
        </button>
      </div>

      {/* Feedback Display */}
      {feedback && (
        <div className={cn(
          'rounded-2xl p-5 border',
          feedback.score >= 80 ? 'bg-green-500/10 border-green-500/30' :
          feedback.score >= 60 ? 'bg-yellow-500/10 border-yellow-500/30' :
          'bg-red-500/10 border-red-500/30'
        )}>
          {/* Score */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider">Điểm phát âm</p>
              <p className={cn('text-4xl font-bold', scoreColor)}>{feedback.score}<span className="text-lg text-white/40">%</span></p>
            </div>
            <div className="text-right">
              {feedback.score >= 80 && <CheckCircle2 size={32} className="text-green-400" />}
              {feedback.score >= 60 && feedback.score < 80 && <AlertCircle size={32} className="text-yellow-400" />}
              {feedback.score < 60 && <XCircle size={32} className="text-red-400" />}
            </div>
          </div>

          {/* Word Analysis */}
          <div className="mb-4">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Phân tích từng từ</p>
            <div className="flex flex-wrap gap-2">
              {feedback.words.map((w, i) => (
                <span
                  key={i}
                  className={cn(
                    'px-3 py-1 rounded-lg text-sm font-medium',
                    w.status === 'correct' ? 'bg-green-500/20 text-green-400' :
                    w.status === 'close' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  )}
                  title={w.status === 'correct' ? 'Đúng' : w.status === 'close' ? 'Gần đúng' : 'Sai'}
                >
                  {w.word}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-xs text-white/30">
              <span><span className="text-green-400">■</span> Đúng</span>
              <span><span className="text-yellow-400">■</span> Gần đúng</span>
              <span><span className="text-red-400">■</span> Sai</span>
            </div>
          </div>

          {/* Transcript */}
          <div className="mb-4">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">AI nghe được</p>
            <p className="text-white/70 text-sm italic">"{feedback.transcript}"</p>
          </div>

          {/* Tips */}
          {feedback.tips.map((tip, i) => (
            <p key={i} className="text-sm text-white/70">💡 {tip}</p>
          ))}
          <div className="mt-3">
            <PlaybackButton audioUrl={audioUrl} />
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-3">
        {/* Record Button */}
        <button
          onClick={isRecording ? stopRecording : startRecording}
          disabled={isProcessing}
          className={cn(
            'flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-sm transition-all',
            isRecording
              ? 'bg-red-500 text-white pulse-record'
              : isProcessing
              ? 'bg-white/10 text-white/50 cursor-wait'
              : 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/20'
          )}
        >
          {isProcessing ? (
            <><Loader2 size={20} className="animate-spin" /> Đang phân tích...</>
          ) : isRecording ? (
            <><MicOff size={20} /> Dừng ghi âm</>
          ) : (
            <><Mic size={20} /> {feedback ? 'Thử lại' : 'Bắt đầu nói'}</>
          )}
        </button>

        {feedback && (
          <button onClick={reset} className="px-4 py-4 bg-white/5 hover:bg-white/10 text-white/60 rounded-2xl transition-colors" title="Reset">
            <RotateCcw size={20} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white/60 disabled:opacity-30 rounded-xl text-sm transition-colors"
        >
          <ChevronLeft size={16} /> Câu trước
        </button>
        <button
          onClick={onNext}
          disabled={index === total - 1}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 disabled:opacity-30 rounded-xl text-sm font-medium transition-colors"
        >
          Câu tiếp <ChevronR size={16} />
        </button>
      </div>
    </div>
  );
}

export default function SpeakingPage({ params }: { params: Params }) {
  const { topicId, contextId } = use(params);
  const topic = allTopics.find((t) => t.id === topicId);
  const ctx = topic?.contexts.find((c) => c.id === contextId);
  if (!topic || !ctx) notFound();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'phrases' | 'dialog'>('phrases');

  const [dialogIndex, setDialogIndex] = useState(0);
  const currentDialog = ctx.dialogs[dialogIndex];
  const [dialogLineIndex, setDialogLineIndex] = useState(0);
  const [dialogShowVi, setDialogShowVi] = useState(false);
  const [dialogIsRecording, setDialogIsRecording] = useState(false);
  const [dialogFeedback, setDialogFeedback] = useState<PronunciationFeedback | null>(null);
  const [dialogIsProcessing, setDialogIsProcessing] = useState(false);
  const [dialogAudioUrl, setDialogAudioUrl] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const dialogMediaRecorderRef = useRef<MediaRecorder | null>(null);

  const youLines = currentDialog?.lines.filter((l) => l.speaker === 'you') ?? [];
  const currentLine = youLines[dialogLineIndex];

  async function startDialogRecording() {
    if (!currentLine) return;
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ ghi âm. Hãy dùng Chrome.');
      return;
    }
    setDialogAudioUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });

    dialogMediaRecorderRef.current = await startMediaRecorder((url) => setDialogAudioUrl(url));

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onstart = () => { setDialogIsRecording(true); setDialogFeedback(null); };
    recognition.onresult = (event) => {
      setDialogIsProcessing(true);
      const transcript = event.results[0][0].transcript;
      setTimeout(() => {
        const fb = comparePronunciation(currentLine.text, transcript);
        setDialogFeedback(fb);
        setDialogIsProcessing(false);
      }, 400);
    };
    recognition.onerror = () => {
      setDialogIsRecording(false);
      setDialogIsProcessing(false);
      if (dialogMediaRecorderRef.current?.state === 'recording') dialogMediaRecorderRef.current.stop();
    };
    recognition.onend = () => {
      setDialogIsRecording(false);
      if (dialogMediaRecorderRef.current?.state === 'recording') dialogMediaRecorderRef.current.stop();
    };
    recognitionRef.current = recognition;
    recognition.start();
  }

  return (
    <div className="p-8 max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
        <Link href="/topics" className="hover:text-white">Chủ đề</Link>
        <ChevronRight size={14} />
        <Link href={`/topics/${topic.id}`} className="hover:text-white">{topic.titleVi}</Link>
        <ChevronRight size={14} />
        <Link href={`/topics/${topic.id}/${ctx.id}`} className="hover:text-white">{ctx.titleVi}</Link>
        <ChevronRight size={14} />
        <span className="text-green-400">Nói</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
          <Mic size={24} className="text-green-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Luyện Nói</h1>
          <p className="text-white/50 text-sm">AI sẽ phân tích phát âm của bạn theo từng từ</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-xl w-fit">
        {[
          { id: 'phrases' as const, label: `Câu mẫu (${ctx.phrases.length})` },
          { id: 'dialog' as const, label: `Roleplay (${ctx.dialogs.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              activeTab === tab.id ? 'bg-green-500/30 text-green-300' : 'text-white/50 hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Phrases Tab */}
      {activeTab === 'phrases' && (
        <PhraseCard
          key={currentIndex}
          phrase={ctx.phrases[currentIndex]}
          topicId={topicId}
          contextId={contextId}
          index={currentIndex}
          total={ctx.phrases.length}
          onNext={() => setCurrentIndex((i) => Math.min(i + 1, ctx.phrases.length - 1))}
          onPrev={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
        />
      )}

      {/* Dialog Roleplay Tab */}
      {activeTab === 'dialog' && (
        <div>
          {ctx.dialogs.length === 0 ? (
            <div className="text-center py-16 text-white/30">
              <p className="text-4xl mb-3">🔜</p>
              <p>Roleplay đang được cập nhật...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Dialog selector */}
              {ctx.dialogs.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {ctx.dialogs.map((d, i) => (
                    <button
                      key={d.id}
                      onClick={() => { setDialogIndex(i); setDialogLineIndex(0); setDialogFeedback(null); }}
                      className={cn(
                        'flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors',
                        i === dialogIndex ? 'bg-green-500/20 text-green-400 border border-green-500/20' : 'bg-white/5 text-white/50 hover:bg-white/10'
                      )}
                    >
                      {d.titleVi}
                    </button>
                  ))}
                </div>
              )}

              {/* Full dialog context */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Tình huống</p>
                <p className="text-white/70 text-sm mb-4">{currentDialog.situationVi}</p>

                {/* All lines — highlight the one to speak */}
                <div className="space-y-3">
                  {currentDialog.lines.map((line, i) => {
                    const youLineIdx = currentDialog.lines.filter((l, li) => l.speaker === 'you' && li <= i).length - 1;
                    const isCurrentSpeakLine = line.speaker === 'you' && youLineIdx === dialogLineIndex;
                    const isPast = line.speaker === 'you' && youLineIdx < dialogLineIndex;

                    return (
                      <div key={i} className={cn('flex gap-3 transition-opacity', line.speaker === 'you' ? 'flex-row-reverse' : 'flex-row', !isCurrentSpeakLine && line.speaker === 'you' && !isPast ? 'opacity-40' : '')}>
                        <div className={cn('flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold',
                          line.speaker === 'you' ? 'bg-amber-500/30 text-amber-400' : 'bg-blue-500/30 text-blue-400')}>
                          {line.speaker === 'you' ? 'B' : 'K'}
                        </div>
                        <div className={cn('max-w-[75%] rounded-2xl px-4 py-2.5 text-sm border',
                          isCurrentSpeakLine ? 'bg-green-500/20 border-green-500/30 ring-2 ring-green-500/30' :
                          isPast ? 'bg-white/10 border-white/5 opacity-60' :
                          line.speaker === 'you' ? 'bg-amber-500/10 border-amber-500/10' :
                          'bg-white/10 border-white/5')}>
                          {isCurrentSpeakLine ? (
                            <p className="text-white font-medium">{line.text}</p>
                          ) : line.speaker === 'you' && !isPast ? (
                            <p className="text-white/30">[ Bạn sẽ nói... ]</p>
                          ) : (
                            <p className="text-white">{line.text}</p>
                          )}
                          {dialogShowVi && line.vietnamese && <p className="text-white/40 text-xs mt-1">{line.vietnamese}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Current line to speak */}
              {currentLine && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                  <p className="text-xs text-green-400/60 uppercase tracking-wider mb-2">Lượt của bạn — hãy nói:</p>
                  <p className="text-lg font-semibold text-white mb-1">{currentLine.text}</p>
                  {dialogShowVi && currentLine.vietnamese && (
                    <p className="text-white/50 text-sm mb-3">{currentLine.vietnamese}</p>
                  )}

                  {dialogFeedback && (
                    <div className="mt-3 p-3 bg-black/20 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={cn('text-2xl font-bold',
                          dialogFeedback.score >= 80 ? 'text-green-400' :
                          dialogFeedback.score >= 60 ? 'text-yellow-400' : 'text-red-400')}>
                          {dialogFeedback.score}%
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {dialogFeedback.words.map((w, i) => (
                            <span key={i} className={cn('text-sm px-2 py-0.5 rounded',
                              w.status === 'correct' ? 'bg-green-500/20 text-green-400' :
                              w.status === 'close' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400')}>
                              {w.word}
                            </span>
                          ))}
                        </div>
                      </div>
                      {dialogFeedback.tips.map((tip, i) => (
                        <p key={i} className="text-xs text-white/60">💡 {tip}</p>
                      ))}
                      <div className="mt-2">
                        <PlaybackButton audioUrl={dialogAudioUrl} />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={dialogIsRecording ? () => { recognitionRef.current?.stop(); setDialogIsRecording(false); } : startDialogRecording}
                      disabled={dialogIsProcessing}
                      className={cn('flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all',
                        dialogIsRecording ? 'bg-red-500 text-white pulse-record' :
                        dialogIsProcessing ? 'bg-white/10 text-white/50 cursor-wait' :
                        'bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/20'
                      )}
                    >
                      {dialogIsProcessing ? <><Loader2 size={16} className="animate-spin" /> Đang phân tích...</> :
                       dialogIsRecording ? <><MicOff size={16} /> Dừng</> :
                       <><Mic size={16} /> Nói</>}
                    </button>
                    <button
                      onClick={() => setDialogShowVi(!dialogShowVi)}
                      className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white/50 rounded-xl text-sm transition-colors"
                    >
                      {dialogShowVi ? 'Ẩn dịch' : 'Hiện dịch'}
                    </button>
                    {dialogFeedback && dialogFeedback.score >= 60 && (
                      <button
                        onClick={() => { setDialogLineIndex((i) => Math.min(i + 1, youLines.length - 1)); setDialogFeedback(null); }}
                        disabled={dialogLineIndex >= youLines.length - 1}
                        className="px-4 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-xl text-sm font-medium transition-colors disabled:opacity-30"
                      >
                        Tiếp →
                      </button>
                    )}
                  </div>
                </div>
              )}
              {!currentLine && youLines.length > 0 && (
                <div className="text-center py-8 bg-green-500/10 border border-green-500/20 rounded-2xl">
                  <CheckCircle2 size={40} className="text-green-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Hoàn thành hội thoại!</p>
                  <p className="text-white/50 text-sm mt-1">Bạn đã luyện xong tất cả phần của mình</p>
                  <button
                    onClick={() => { setDialogLineIndex(0); setDialogFeedback(null); }}
                    className="mt-4 px-5 py-2 bg-green-500/20 text-green-400 rounded-xl text-sm font-medium hover:bg-green-500/30 transition-colors"
                  >
                    Luyện lại từ đầu
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
