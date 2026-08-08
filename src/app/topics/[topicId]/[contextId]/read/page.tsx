'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTopics } from '@/data';
import { ReadingPassage } from '@/data/types';
import { cn } from '@/lib/cn';
import {
  ChevronRight,
  BookOpen,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { markItemComplete, getContextProgress } from '@/lib/progress';

type Params = Promise<{ topicId: string; contextId: string }>;
type Phase = 'reading' | 'quiz' | 'done';

function PassageContent({ content }: { content: string }) {
  const lines = content.split('\n');
  return (
    <div className="space-y-1.5 leading-relaxed">
      {lines.map((line, i) => {
        if (line === '') return <div key={i} className="h-2" />;
        const isHeader = line === line.toUpperCase() && line.trim().length > 3 && /[A-Z]/.test(line);
        const isBullet = line.trimStart().startsWith('•') || line.trimStart().startsWith('-');
        if (isHeader) {
          return (
            <p key={i} className="text-amber-400 font-bold text-xs tracking-widest uppercase mt-4 mb-1">
              {line.trim()}
            </p>
          );
        }
        if (isBullet) {
          return (
            <p key={i} className="text-white/75 text-sm pl-4">
              {line.trim()}
            </p>
          );
        }
        return (
          <p key={i} className="text-white/75 text-sm">
            {line}
          </p>
        );
      })}
    </div>
  );
}

function PassageCard({
  passage,
  topicId,
  contextId,
  onNext,
  isLast,
}: {
  passage: ReadingPassage;
  topicId: string;
  contextId: string;
  onNext: () => void;
  isLast: boolean;
}) {
  const alreadyDone = (() => {
    const progress = getContextProgress(topicId, contextId, 'reading');
    return progress?.completedItems.includes(passage.id) ?? false;
  })();

  const [phase, setPhase] = useState<Phase>(alreadyDone ? 'done' : 'reading');
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(passage.questions.length).fill(null)
  );

  const totalQ = passage.questions.length;
  const currentQ = passage.questions[questionIdx];
  const selected = selectedAnswers[questionIdx];
  const answered = selected !== null;

  const score = selectedAnswers.filter(
    (ans, i) => ans === passage.questions[i].correctIndex
  ).length;

  function handleSelect(optIdx: number) {
    if (answered) return;
    const next = [...selectedAnswers];
    next[questionIdx] = optIdx;
    setSelectedAnswers(next);
  }

  function handleNext() {
    if (questionIdx < totalQ - 1) {
      setQuestionIdx(questionIdx + 1);
    } else {
      const pct = Math.round((score / totalQ) * 100);
      markItemComplete(topicId, contextId, 'reading', passage.id, pct);
      setPhase('done');
    }
  }

  function handleRetry() {
    setPhase('reading');
    setQuestionIdx(0);
    setSelectedAnswers(new Array(passage.questions.length).fill(null));
  }

  // ---------- Reading phase ----------
  if (phase === 'reading') {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">{passage.title}</h2>
          <p className="text-sm text-white/50 mt-0.5">{passage.titleVi}</p>
        </div>
        <div className="px-6 py-5">
          <PassageContent content={passage.content} />
        </div>
        <div className="px-6 py-4 border-t border-white/10 bg-white/3">
          <button
            onClick={() => setPhase('quiz')}
            className="w-full flex items-center justify-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/20 font-semibold text-sm rounded-xl py-3 transition-colors"
          >
            <BookOpen size={16} />
            Kiểm tra hiểu bài ({totalQ} câu hỏi)
          </button>
        </div>
      </div>
    );
  }

  // ---------- Quiz phase ----------
  if (phase === 'quiz') {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-amber-500 transition-all"
            style={{ width: `${((questionIdx + (answered ? 1 : 0)) / totalQ) * 100}%` }}
          />
        </div>

        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <span className="text-xs text-white/40 font-semibold">
            Câu {questionIdx + 1} / {totalQ}
          </span>
          <span className="text-xs text-white/40">{passage.titleVi}</span>
        </div>

        <div className="px-6 py-6 space-y-5">
          <p className="text-white font-semibold text-base leading-snug">{currentQ.question}</p>

          <div className="space-y-2">
            {currentQ.options.map((opt, i) => {
              const isCorrect = i === currentQ.correctIndex;
              const isChosen = i === selected;

              let style = 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20';
              if (answered) {
                if (isCorrect) style = 'bg-green-500/20 border-green-500/40 text-green-300';
                else if (isChosen) style = 'bg-red-500/20 border-red-500/40 text-red-300';
                else style = 'bg-white/3 border-white/5 text-white/30';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={cn(
                    'w-full text-left rounded-xl px-4 py-3 text-sm transition-colors flex items-start gap-3',
                    style
                  )}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold mt-0.5">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {answered && isCorrect && <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />}
                  {answered && isChosen && !isCorrect && <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-blue-400 mb-1">Giải thích</p>
              <p className="text-sm text-white/70">{currentQ.explanation}</p>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-white/10">
          <button
            onClick={handleNext}
            disabled={!answered}
            className={cn(
              'w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors',
              answered
                ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/20'
                : 'bg-white/5 text-white/20 cursor-not-allowed'
            )}
          >
            {questionIdx < totalQ - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // ---------- Done phase ----------
  const pct = Math.round((score / totalQ) * 100);
  const isPerfect = score === totalQ;
  const isGood = pct >= 75;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="px-6 py-10 text-center space-y-4">
        <div className="text-5xl">
          {isPerfect ? '🏆' : isGood ? '🎉' : '📚'}
        </div>
        <div>
          <p className="text-2xl font-bold text-white">
            {score}/{totalQ} câu đúng
          </p>
          <p className="text-sm text-white/50 mt-1">{passage.titleVi}</p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{
            background: isPerfect ? 'rgba(234,179,8,0.15)' : isGood ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
            color: isPerfect ? '#fbbf24' : isGood ? '#4ade80' : '#f87171',
            border: `1px solid ${isPerfect ? 'rgba(234,179,8,0.3)' : isGood ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}`,
          }}
        >
          <Trophy size={14} />
          {isPerfect ? 'Hoàn hảo!' : isGood ? 'Tốt lắm!' : 'Cần ôn thêm'}
          &nbsp;({pct}%)
        </div>

        <div className="flex gap-3 justify-center pt-2">
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
          >
            <RotateCcw size={14} />
            Đọc lại
          </button>
          {!isLast && (
            <button
              onClick={onNext}
              className="flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/20 text-amber-400 text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
            >
              Bài tiếp theo
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ReadingPage({ params }: { params: Params }) {
  const { topicId, contextId } = use(params);
  const topic = allTopics.find((t) => t.id === topicId);
  const ctx = topic?.contexts.find((c) => c.id === contextId);
  if (!topic || !ctx) notFound();

  const passages = ctx.readingPassages;
  const [passageIdx, setPassageIdx] = useState(0);

  function getCompletedIds() {
    const progress = getContextProgress(topicId, contextId, 'reading');
    return progress?.completedItems ?? [];
  }

  if (passages.length === 0) {
    return (
      <div className="p-8 max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
          <Link href="/topics" className="hover:text-white">Chủ đề</Link>
          <ChevronRight size={14} />
          <Link href={`/topics/${topic.id}`} className="hover:text-white">{topic.titleVi}</Link>
          <ChevronRight size={14} />
          <Link href={`/topics/${topic.id}/${ctx.id}`} className="hover:text-white">{ctx.titleVi}</Link>
          <ChevronRight size={14} />
          <span className="text-amber-400">Đọc</span>
        </div>
        <div className="text-center py-24 text-white/30">
          <p className="text-5xl mb-4">📖</p>
          <p className="text-lg font-semibold">Chưa có bài đọc</p>
          <p className="text-sm mt-1">Nội dung đang được cập nhật...</p>
        </div>
      </div>
    );
  }

  const passage = passages[passageIdx];
  const isLast = passageIdx === passages.length - 1;

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
        <span className="text-amber-400">Đọc</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl">
          📖
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Luyện Đọc</h1>
          <p className="text-white/50 text-sm">{ctx.titleVi} — Đọc hiểu văn bản thực tế</p>
        </div>
      </div>

      {/* Passage navigation tabs */}
      {passages.length > 1 && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {passages.map((p, i) => {
            const completedIds = getCompletedIds();
            const done = completedIds.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => setPassageIdx(i)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors border',
                  passageIdx === i
                    ? 'bg-amber-500/20 border-amber-500/30 text-amber-300'
                    : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20'
                )}
              >
                {done && <CheckCircle2 size={13} className="text-green-400" />}
                Bài {i + 1}
              </button>
            );
          })}
        </div>
      )}

      {/* Passage card — key forces full remount when switching passages */}
      <PassageCard
        key={passage.id}
        passage={passage}
        topicId={topicId}
        contextId={contextId}
        onNext={() => setPassageIdx((idx) => Math.min(idx + 1, passages.length - 1))}
        isLast={isLast}
      />

      {/* Next skill CTA */}
      {isLast && (
        <div className="mt-10 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="font-semibold text-white">Bước tiếp theo: Luyện Viết ✍️</p>
            <p className="text-sm text-white/50">Thực hành viết email, tin nhắn và báo cáo kinh doanh</p>
          </div>
          <Link
            href={`/topics/${topic.id}/${ctx.id}`}
            className="flex-shrink-0 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 font-semibold text-sm px-5 py-2.5 rounded-xl border border-purple-500/20 transition-colors"
          >
            Về tổng quan →
          </Link>
        </div>
      )}
    </div>
  );
}
