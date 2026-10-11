'use client';

import { useState } from 'react';
import { allTopics } from '@/data';
import { VocabularyItem } from '@/data/types';
import { cn } from '@/lib/cn';
import { Volume2, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { useSpeech } from '@/lib/useSpeech';

type Mode = 'browse' | 'flashcard' | 'quiz';

function SpeakButton({ text, className }: { text: string; className?: string }) {
  const { speak, speaking } = useSpeech();
  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text); }}
      title="Phát âm"
      className={cn(
        'transition-colors',
        speaking ? 'text-blue-400 animate-pulse' : 'text-white/30 hover:text-blue-400',
        className
      )}
    >
      <Volume2 size={18} />
    </button>
  );
}

function FlashCard({ item, onNext, onPrev, index, total }: {
  item: VocabularyItem;
  onNext: () => void;
  onPrev: () => void;
  index: number;
  total: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const { speak } = useSpeech();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-white/40 mb-2">
        <span>{index + 1} / {total}</span>
        <span className="text-xs">Click để lật thẻ</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 progress-bar" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {/* Card */}
      <div
        onClick={() => { setFlipped(!flipped); if (!flipped) speak(item.word); }}
        className={cn(
          'min-h-56 rounded-2xl p-8 cursor-pointer transition-all duration-300 border flex flex-col justify-center',
          flipped
            ? 'bg-amber-500/10 border-amber-500/20'
            : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
        )}
      >
        {!flipped ? (
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-2">{item.word}</p>
            <p className="text-white/40 text-sm font-mono italic">{item.phonetic}</p>
            <p className="text-white/30 text-sm mt-2">{item.partOfSpeech}</p>
            <p className="text-white/20 text-xs mt-6">Tap để nghe + xem nghĩa</p>
          </div>
        ) : (
          <div>
            <p className="text-xs text-amber-400/60 uppercase tracking-wider mb-3">Nghĩa tiếng Anh</p>
            <p className="text-white text-lg font-medium mb-2">{item.definition}</p>
            <p className="text-amber-400 font-semibold text-lg">{item.definitionVi}</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Ví dụ</p>
              <p className="text-white/70 text-sm italic">"{item.example}"</p>
              <p className="text-white/40 text-sm mt-1">"{item.exampleVi}"</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white/60 disabled:opacity-30 rounded-xl text-sm transition-colors"
        >
          <ChevronLeft size={16} /> Trước
        </button>
        <button
          onClick={() => setFlipped(false)}
          className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white/50 rounded-xl text-sm transition-colors"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={() => { setFlipped(false); onNext(); }}
          disabled={index === total - 1}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 disabled:opacity-30 rounded-xl text-sm font-medium transition-colors"
        >
          Tiếp <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildOptions(items: VocabularyItem[], qIndex: number): string[] {
  const item = items[qIndex];
  const wrong = shuffle(items.filter((i) => i.id !== item.id)).slice(0, 3);
  return shuffle([...wrong.map((i) => i.definitionVi), item.definitionVi]);
}

function QuizMode({ items }: { items: VocabularyItem[] }) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  // Shuffle once per question so options don't jump around on re-render
  const [options, setOptions] = useState(() => buildOptions(items, 0));

  const item = items[qIndex];

  function handleAnswer(ans: string) {
    if (selected) return;
    setSelected(ans);
    if (ans === item.definitionVi) setScore((s) => s + 1);
  }

  function next() {
    if (qIndex + 1 >= items.length) {
      setFinished(true);
    } else {
      setQIndex(qIndex + 1);
      setOptions(buildOptions(items, qIndex + 1));
      setSelected(null);
    }
  }

  function restart() {
    setQIndex(0);
    setOptions(buildOptions(items, 0));
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / items.length) * 100);
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
        <p className="text-3xl font-bold text-white mb-2">{pct}%</p>
        <p className="text-white/50 mb-1">{score}/{items.length} câu đúng</p>
        <p className="text-white/30 text-sm mb-8">
          {pct >= 80 ? 'Xuất sắc! Bạn đã nắm rất tốt những từ này.' : pct >= 60 ? 'Tốt! Luyện thêm các từ còn yếu.' : 'Hãy ôn lại và thử lại nhé!'}
        </p>
        <button onClick={restart} className="px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-xl font-semibold transition-colors">
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-white/40 mb-4">
        <span>Câu {qIndex + 1}/{items.length}</span>
        <span className="text-green-400">{score} điểm</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 to-violet-500 progress-bar" style={{ width: `${((qIndex + 1) / items.length) * 100}%` }} />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center mb-4">
        <p className="text-xs text-white/30 uppercase tracking-wider mb-3">"{item.word}" nghĩa là gì?</p>
        <p className="text-3xl font-bold text-white">{item.word}</p>
        <p className="text-white/40 font-mono text-sm mt-1">{item.phonetic}</p>
        <p className="text-white/30 text-sm mt-1">{item.partOfSpeech}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className={cn(
              'p-4 rounded-xl text-sm font-medium text-left transition-colors border',
              !selected ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white' :
              opt === item.definitionVi ? 'bg-green-500/20 border-green-500/30 text-green-400' :
              opt === selected && opt !== item.definitionVi ? 'bg-red-500/20 border-red-500/30 text-red-400' :
              'bg-white/3 border-white/5 text-white/30'
            )}
          >
            <div className="flex items-start gap-2">
              {selected && (
                opt === item.definitionVi ? <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" /> :
                opt === selected ? <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" /> :
                <span className="w-4 h-4 flex-shrink-0" />
              )}
              {opt}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="pt-2">
          <div className={cn('rounded-xl p-4 mb-3', selected === item.definitionVi ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20')}>
            <p className="text-sm text-white/70">Ví dụ: <span className="italic">"{item.example}"</span></p>
          </div>
          <button onClick={next} className="w-full py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-xl font-semibold transition-colors">
            {qIndex + 1 >= items.length ? 'Xem kết quả' : 'Câu tiếp →'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function VocabularyPage() {
  const allVocab: (VocabularyItem & { contextTitle: string; topicTitle: string })[] = [];
  for (const topic of allTopics) {
    for (const ctx of topic.contexts) {
      for (const v of ctx.vocabulary) {
        allVocab.push({ ...v, contextTitle: ctx.titleVi, topicTitle: topic.titleVi });
      }
    }
  }

  const [mode, setMode] = useState<Mode>('browse');
  const [filterContext, setFilterContext] = useState<string>('all');
  const [flashIndex, setFlashIndex] = useState(0);
  const [search, setSearch] = useState('');

  const contextOptions = Array.from(new Set(allVocab.map((v) => v.contextTitle)));
  const filtered = allVocab.filter((v) => {
    const matchCtx = filterContext === 'all' || v.contextTitle === filterContext;
    const matchSearch = !search || v.word.toLowerCase().includes(search.toLowerCase()) || v.definitionVi.toLowerCase().includes(search.toLowerCase());
    return matchCtx && matchSearch;
  });

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-1">Từ vựng</h1>
        <p className="text-white/50">{allVocab.length} từ từ tất cả chủ đề</p>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-xl w-fit">
        {[
          { id: 'browse' as const, label: 'Duyệt' },
          { id: 'flashcard' as const, label: 'Flashcard' },
          { id: 'quiz' as const, label: 'Quiz' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setMode(tab.id); setFlashIndex(0); }}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              mode === tab.id ? 'bg-amber-500/30 text-amber-300' : 'text-white/50 hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      {mode !== 'flashcard' && (
        <div className="flex gap-3 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="Tìm từ vựng..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 w-48"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilterContext('all')}
              className={cn('px-3 py-2 rounded-xl text-xs font-medium transition-colors',
                filterContext === 'all' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-white/50 hover:bg-white/10'
              )}
            >
              Tất cả
            </button>
            {contextOptions.map((ctx) => (
              <button
                key={ctx}
                onClick={() => setFilterContext(ctx)}
                className={cn('px-3 py-2 rounded-xl text-xs font-medium transition-colors',
                  filterContext === ctx ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-white/50 hover:bg-white/10'
                )}
              >
                {ctx}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Browse Mode */}
      {mode === 'browse' && (
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-white/30">Không tìm thấy từ nào.</div>
          )}
          {filtered.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-white font-semibold text-lg">{item.word}</span>
                    <span className="text-white/40 font-mono text-sm">{item.phonetic}</span>
                    <span className="text-xs bg-white/10 text-white/40 px-2 py-0.5 rounded-full">{item.partOfSpeech}</span>
                  </div>
                  <p className="text-amber-400 font-medium mt-1">{item.definitionVi}</p>
                  <p className="text-white/50 text-sm mt-0.5">{item.definition}</p>
                  <p className="text-white/30 text-sm mt-2 italic">"{item.example}"</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <SpeakButton text={item.word} />
                  <span className="text-xs text-white/20">{item.contextTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Flashcard Mode */}
      {mode === 'flashcard' && filtered.length > 0 && (
        <FlashCard
          key={flashIndex}
          item={filtered[flashIndex]}
          index={flashIndex}
          total={filtered.length}
          onNext={() => setFlashIndex((i) => Math.min(i + 1, filtered.length - 1))}
          onPrev={() => setFlashIndex((i) => Math.max(i - 1, 0))}
        />
      )}

      {/* Quiz Mode */}
      {mode === 'quiz' && filtered.length >= 4 && (
        <QuizMode key={filterContext} items={filtered} />
      )}
      {mode === 'quiz' && filtered.length < 4 && (
        <div className="text-center py-16 text-white/30">
          <p>Cần ít nhất 4 từ để làm quiz.</p>
        </div>
      )}
    </div>
  );
}
