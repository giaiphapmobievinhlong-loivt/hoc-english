'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTopics } from '@/data';
import { Dialog, DialogLine } from '@/data/types';
import { cn } from '@/lib/cn';
import { ChevronRight, Volume2, Eye, EyeOff, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { markItemComplete, getContextProgress } from '@/lib/progress';
import { useSpeech } from '@/lib/useSpeech';

type Params = Promise<{ topicId: string; contextId: string }>;

function SpeakButton({ text, size = 14 }: { text: string; size?: number }) {
  const { speak, speaking } = useSpeech();
  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(text); }}
      title="Phát âm"
      className={speaking ? 'text-blue-400 animate-pulse' : 'text-white/20 hover:text-blue-400 transition-colors'}
    >
      <Volume2 size={size} />
    </button>
  );
}

function DialogCard({ dialog, topicId, contextId }: { dialog: Dialog; topicId: string; contextId: string }) {
  const [showVietnamese, setShowVietnamese] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    const progress = getContextProgress(topicId, contextId, 'listening');
    if (progress?.completedItems.includes(dialog.id)) setCompleted(true);
  }, []);

  const visibleLines = expanded ? dialog.lines : dialog.lines.slice(0, 4);

  function handleComplete() {
    markItemComplete(topicId, contextId, 'listening', dialog.id, 100);
    setCompleted(true);
  }

  const levelColor = dialog.level <= 2 ? 'text-green-400 bg-green-500/10' : dialog.level <= 3 ? 'text-yellow-400 bg-yellow-500/10' : 'text-red-400 bg-red-500/10';
  const levelLabel = dialog.level <= 2 ? 'Dễ' : dialog.level <= 3 ? 'Trung bình' : 'Khó';

  return (
    <div className={cn('bg-white/5 border rounded-2xl overflow-hidden transition-colors', completed ? 'border-green-500/30' : 'border-white/10')}>
      {/* Card Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full', levelColor)}>{levelLabel}</span>
              {completed && <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-green-400 bg-green-500/10">✓ Hoàn thành</span>}
            </div>
            <h3 className="font-bold text-white text-lg">{dialog.titleVi}</h3>
            <p className="text-sm text-white/50 mt-0.5">{dialog.situationVi}</p>
          </div>
          <button
            onClick={() => setShowVietnamese(!showVietnamese)}
            className="flex-shrink-0 flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg"
          >
            {showVietnamese ? <EyeOff size={14} /> : <Eye size={14} />}
            {showVietnamese ? 'Ẩn dịch' : 'Hiện dịch'}
          </button>
        </div>
      </div>

      {/* Dialog Lines */}
      <div className="p-5 space-y-4">
        {visibleLines.map((line: DialogLine, i: number) => (
          <div key={i} className={cn('flex gap-3', line.speaker === 'you' ? 'flex-row-reverse' : 'flex-row')}>
            <div className={cn(
              'flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold',
              line.speaker === 'you' ? 'bg-amber-500/30 text-amber-400' : 'bg-blue-500/30 text-blue-400'
            )}>
              {line.speaker === 'you' ? 'Bạn' : 'KH'}
            </div>
            <div className={cn(
              'max-w-[78%] space-y-1',
              line.speaker === 'you' ? 'items-end flex flex-col' : 'items-start flex flex-col'
            )}>
              <div className={cn(
                'rounded-2xl px-4 py-3 text-sm',
                line.speaker === 'you'
                  ? 'bg-amber-500/20 text-white rounded-tr-sm border border-amber-500/10'
                  : 'bg-white/10 text-white rounded-tl-sm border border-white/5'
              )}>
                <p className="leading-relaxed">{line.text}</p>
              </div>
              {showVietnamese && line.vietnamese && (
                <p className="text-xs text-white/40 px-1">{line.vietnamese}</p>
              )}
            </div>
            <div className="self-end mb-1 flex-shrink-0">
              <SpeakButton text={line.text} size={14} />
            </div>
          </div>
        ))}

        {dialog.lines.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-2 text-sm text-white/40 hover:text-white transition-colors py-2 border border-dashed border-white/10 hover:border-white/30 rounded-xl"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {expanded ? 'Thu gọn' : `Xem thêm ${dialog.lines.length - 4} lượt trao đổi`}
          </button>
        )}
      </div>

      {/* Key Points */}
      {dialog.keyPoints.length > 0 && (
        <div className="px-5 pb-4">
          <p className="text-xs text-white/30 font-semibold uppercase tracking-wider mb-2">Điểm chú ý</p>
          <div className="flex flex-wrap gap-2">
            {dialog.keyPoints.map((kp, i) => (
              <span key={i} className="text-xs bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full">{kp}</span>
            ))}
          </div>
        </div>
      )}

      {/* Complete Button */}
      <div className="p-4 border-t border-white/10 bg-white/3">
        <button
          onClick={handleComplete}
          disabled={completed}
          className={cn(
            'w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors',
            completed
              ? 'bg-green-500/20 text-green-400 cursor-default'
              : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/20'
          )}
        >
          <CheckCircle2 size={16} />
          {completed ? 'Đã hoàn thành' : 'Đánh dấu đã nghe'}
        </button>
      </div>
    </div>
  );
}

export default function ListeningPage({ params }: { params: Params }) {
  const { topicId, contextId } = use(params);
  const topic = allTopics.find((t) => t.id === topicId);
  const ctx = topic?.contexts.find((c) => c.id === contextId);
  if (!topic || !ctx) notFound();

  const [activeTab, setActiveTab] = useState<'dialogs' | 'phrases'>('dialogs');

  const phraseCategories = Array.from(new Set(ctx.phrases.map((p) => p.category)));

  return (
    <div className="p-8 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
        <Link href="/topics" className="hover:text-white">Chủ đề</Link>
        <ChevronRight size={14} />
        <Link href={`/topics/${topic.id}`} className="hover:text-white">{topic.titleVi}</Link>
        <ChevronRight size={14} />
        <Link href={`/topics/${topic.id}/${ctx.id}`} className="hover:text-white">{ctx.titleVi}</Link>
        <ChevronRight size={14} />
        <span className="text-blue-400">Nghe</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
          <Volume2 size={24} className="text-blue-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Luyện Nghe</h1>
          <p className="text-white/50 text-sm">{ctx.titleVi} — Đọc và hiểu các hội thoại thực tế</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-xl w-fit">
        {[
          { id: 'dialogs' as const, label: `Hội thoại (${ctx.dialogs.length})` },
          { id: 'phrases' as const, label: `Câu mẫu (${ctx.phrases.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              activeTab === tab.id ? 'bg-blue-500/30 text-blue-300' : 'text-white/50 hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dialogs Tab */}
      {activeTab === 'dialogs' && (
        <div className="space-y-6">
          {ctx.dialogs.length === 0 ? (
            <div className="text-center py-16 text-white/30">
              <p className="text-4xl mb-3">🔜</p>
              <p>Hội thoại đang được cập nhật...</p>
            </div>
          ) : (
            ctx.dialogs.map((dialog) => (
              <DialogCard key={dialog.id} dialog={dialog} topicId={topicId} contextId={contextId} />
            ))
          )}
        </div>
      )}

      {/* Phrases Tab */}
      {activeTab === 'phrases' && (
        <div className="space-y-6">
          {phraseCategories.map((cat) => (
            <div key={cat}>
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3 px-1">{cat}</h3>
              <div className="space-y-2">
                {ctx.phrases.filter((p) => p.category === cat).map((phrase) => (
                  <div key={phrase.id} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0"><SpeakButton text={phrase.english} size={16} /></div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{phrase.english}</p>
                        <p className="text-white/50 text-sm mt-0.5">{phrase.vietnamese}</p>
                        {phrase.phonetic && (
                          <p className="text-blue-400/60 text-xs mt-1 font-mono">{phrase.phonetic}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Next: Speak */}
      <div className="mt-10 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="font-semibold text-white">Bước tiếp theo: Luyện Nói 🎤</p>
          <p className="text-sm text-white/50">Thực hành nói các câu bạn vừa học với AI feedback</p>
        </div>
        <Link
          href={`/topics/${topic.id}/${ctx.id}/speak`}
          className="flex-shrink-0 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold text-sm px-5 py-2.5 rounded-xl border border-green-500/20 transition-colors"
        >
          Luyện nói →
        </Link>
      </div>
    </div>
  );
}
