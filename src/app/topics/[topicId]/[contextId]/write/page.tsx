'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTopics } from '@/data';
import { WritingPrompt } from '@/data/types';
import { cn } from '@/lib/cn';
import {
  ChevronRight,
  PenLine,
  Eye,
  EyeOff,
  CheckCircle2,
  Lightbulb,
  RotateCcw,
} from 'lucide-react';
import { markItemComplete, getContextProgress } from '@/lib/progress';

type Params = Promise<{ topicId: string; contextId: string }>;

function KeyPhraseChips({
  phrases,
  userText,
}: {
  phrases: string[];
  userText: string;
}) {
  const lower = userText.toLowerCase();
  return (
    <div className="flex flex-wrap gap-2">
      {phrases.map((phrase) => {
        const used = lower.includes(phrase.toLowerCase());
        return (
          <span
            key={phrase}
            className={cn(
              'text-xs px-3 py-1 rounded-full border font-medium transition-colors',
              used
                ? 'bg-green-500/20 border-green-500/30 text-green-400'
                : 'bg-white/5 border-white/10 text-white/40'
            )}
          >
            {used && '✓ '}{phrase}
          </span>
        );
      })}
    </div>
  );
}

function PromptCard({
  prompt,
  topicId,
  contextId,
  onNext,
  isLast,
}: {
  prompt: WritingPrompt;
  topicId: string;
  contextId: string;
  onNext: () => void;
  isLast: boolean;
}) {
  const alreadyDone = (() => {
    const progress = getContextProgress(topicId, contextId, 'writing');
    return progress?.completedItems.includes(prompt.id) ?? false;
  })();

  const [userText, setUserText] = useState('');
  const [showSample, setShowSample] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [completed, setCompleted] = useState(alreadyDone);

  const wordCount = userText.trim() === '' ? 0 : userText.trim().split(/\s+/).length;
  const usedPhrases = prompt.keyPhrases.filter((p) =>
    userText.toLowerCase().includes(p.toLowerCase())
  ).length;
  const phrasePct = Math.round((usedPhrases / prompt.keyPhrases.length) * 100);

  function handleComplete() {
    markItemComplete(topicId, contextId, 'writing', prompt.id, phrasePct);
    setCompleted(true);
  }

  function handleReset() {
    setUserText('');
    setShowSample(false);
    setCompleted(false);
  }

  return (
    <div className="space-y-4">
      {/* Prompt Instructions */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/3 transition-colors"
        >
          <div className="flex items-center gap-3">
            <PenLine size={18} className="text-purple-400" />
            <div>
              <p className="font-bold text-white">{prompt.title}</p>
              <p className="text-xs text-white/40">{prompt.titleVi}</p>
            </div>
          </div>
          {showInstructions ? (
            <EyeOff size={16} className="text-white/30" />
          ) : (
            <Eye size={16} className="text-white/30" />
          )}
        </button>

        {showInstructions && (
          <div className="px-6 pb-5 space-y-4 border-t border-white/10">
            <div className="pt-4">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Nhiệm vụ</p>
              <p className="text-white/80 text-sm leading-relaxed">{prompt.instructionsVi}</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-blue-400 mb-1.5">English instructions</p>
              <p className="text-white/70 text-sm leading-relaxed">{prompt.instructions}</p>
            </div>
          </div>
        )}
      </div>

      {/* Key Phrases */}
      <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Lightbulb size={14} className="text-amber-400" />
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
              Cụm từ cần dùng
            </p>
          </div>
          {userText.length > 0 && (
            <span className="text-xs text-white/40">
              {usedPhrases}/{prompt.keyPhrases.length} đã dùng
            </span>
          )}
        </div>
        <KeyPhraseChips phrases={prompt.keyPhrases} userText={userText} />
      </div>

      {/* Writing Area */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Bài viết của bạn</p>
          <span className="text-xs text-white/30">{wordCount} từ</span>
        </div>
        <textarea
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          placeholder="Bắt đầu viết ở đây... (Start writing here...)"
          rows={12}
          className="w-full bg-transparent px-5 py-4 text-sm text-white/80 placeholder-white/20 resize-none outline-none leading-relaxed"
        />
      </div>

      {/* Sample Answer */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <button
          onClick={() => setShowSample(!showSample)}
          className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-white/3 transition-colors"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-white/60">
            <Eye size={15} />
            {showSample ? 'Ẩn bài mẫu' : 'Xem bài mẫu'}
          </div>
          <span className="text-xs text-white/30">So sánh bài viết của bạn</span>
        </button>

        {showSample && (
          <div className="border-t border-white/10 px-5 py-4">
            <p className="text-xs font-semibold text-amber-400 mb-3 uppercase tracking-wider">Bài mẫu</p>
            <pre className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap font-sans">
              {prompt.sampleAnswer}
            </pre>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white text-sm px-4 py-2.5 rounded-xl transition-colors"
        >
          <RotateCcw size={14} />
          Xóa và viết lại
        </button>

        <button
          onClick={handleComplete}
          disabled={completed || userText.trim().length < 20}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors',
            completed
              ? 'bg-green-500/20 text-green-400 border border-green-500/20 cursor-default'
              : userText.trim().length >= 20
              ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/20'
              : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
          )}
        >
          <CheckCircle2 size={16} />
          {completed ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}
        </button>
      </div>

      {/* Next prompt CTA */}
      {completed && !isLast && (
        <button
          onClick={onNext}
          className="w-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 text-sm font-semibold rounded-xl py-3 transition-colors"
        >
          Bài tiếp theo →
        </button>
      )}
    </div>
  );
}

export default function WritingPage({ params }: { params: Params }) {
  const { topicId, contextId } = use(params);
  const topic = allTopics.find((t) => t.id === topicId);
  const ctx = topic?.contexts.find((c) => c.id === contextId);
  if (!topic || !ctx) notFound();

  const prompts = ctx.writingPrompts;
  const [promptIdx, setPromptIdx] = useState(0);

  function getCompletedIds() {
    const progress = getContextProgress(topicId, contextId, 'writing');
    return progress?.completedItems ?? [];
  }

  if (prompts.length === 0) {
    return (
      <div className="p-8 max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
          <Link href="/topics" className="hover:text-white">Chủ đề</Link>
          <ChevronRight size={14} />
          <Link href={`/topics/${topic.id}`} className="hover:text-white">{topic.titleVi}</Link>
          <ChevronRight size={14} />
          <Link href={`/topics/${topic.id}/${ctx.id}`} className="hover:text-white">{ctx.titleVi}</Link>
          <ChevronRight size={14} />
          <span className="text-purple-400">Viết</span>
        </div>
        <div className="text-center py-24 text-white/30">
          <p className="text-5xl mb-4">✍️</p>
          <p className="text-lg font-semibold">Chưa có bài viết</p>
          <p className="text-sm mt-1">Nội dung đang được cập nhật...</p>
        </div>
      </div>
    );
  }

  const prompt = prompts[promptIdx];
  const isLast = promptIdx === prompts.length - 1;

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
        <span className="text-purple-400">Viết</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">
          ✍️
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Luyện Viết</h1>
          <p className="text-white/50 text-sm">{ctx.titleVi} — Viết email, tin nhắn và văn bản kinh doanh</p>
        </div>
      </div>

      {/* Prompt tabs */}
      {prompts.length > 1 && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {prompts.map((p, i) => {
            const completedIds = getCompletedIds();
            const done = completedIds.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => setPromptIdx(i)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors border',
                  promptIdx === i
                    ? 'bg-purple-500/20 border-purple-500/30 text-purple-300'
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

      {/* Prompt card — key forces full remount when switching */}
      <PromptCard
        key={prompt.id}
        prompt={prompt}
        topicId={topicId}
        contextId={contextId}
        onNext={() => setPromptIdx((i) => Math.min(i + 1, prompts.length - 1))}
        isLast={isLast}
      />

      {/* All done CTA */}
      {isLast && (
        <div className="mt-10 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="font-semibold text-white">Xuất sắc! Bạn đã hoàn thành tất cả 4 kỹ năng 🎉</p>
            <p className="text-sm text-white/50">Quay lại tổng quan để xem tiến độ của bạn</p>
          </div>
          <Link
            href={`/topics/${topic.id}/${ctx.id}`}
            className="flex-shrink-0 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 font-semibold text-sm px-5 py-2.5 rounded-xl border border-amber-500/20 transition-colors"
          >
            Tổng quan →
          </Link>
        </div>
      )}
    </div>
  );
}
