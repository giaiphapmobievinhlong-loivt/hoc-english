'use client';

import Link from 'next/link';
import { getOverallStats, getTotalItemsCompleted, getStudyStreak, useProgress } from '@/lib/progress';
import { allTopics } from '@/data';
import { Headphones, Mic, FileText, PenLine, BookOpen, Flame, Star, Target } from 'lucide-react';
import { cn } from '@/lib/cn';

const skillConfig = {
  listening: { label: 'Nghe', icon: Headphones, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  speaking: { label: 'Nói', icon: Mic, color: 'from-green-500 to-emerald-600', bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
  reading: { label: 'Đọc', icon: FileText, color: 'from-yellow-500 to-amber-600', bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
  writing: { label: 'Viết', icon: PenLine, color: 'from-purple-500 to-violet-600', bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
};

export default function DashboardPage() {
  const progress = useProgress();
  const stats = getOverallStats(progress);
  const totalItems = getTotalItemsCompleted(progress);
  const streak = getStudyStreak(progress);

  const topic = allTopics[0];
  const totalContexts = topic.contexts.length;
  const totalPhrases = topic.contexts.reduce((s, c) => s + c.phrases.length, 0);
  const totalDialogs = topic.contexts.reduce((s, c) => s + c.dialogs.length, 0);
  const totalVocab = topic.contexts.reduce((s, c) => s + c.vocabulary.length, 0);

  return (
    <div className="p-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Xin chào! 👋</h1>
        <p className="text-white/50">Hôm nay bạn muốn luyện kỹ năng nào?</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
            <Flame size={24} className="text-orange-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{streak}</p>
            <p className="text-xs text-white/50">Ngày liên tiếp</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Star size={24} className="text-amber-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{totalItems}</p>
            <p className="text-xs text-white/50">Mục đã hoàn thành</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Target size={24} className="text-blue-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{totalContexts}</p>
            <p className="text-xs text-white/50">Ngữ cảnh đang học</p>
          </div>
        </div>
      </div>

      {/* Skills Progress */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Tiến độ 4 kỹ năng</h2>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ skill, average, sessionsCompleted }) => {
            const cfg = skillConfig[skill as keyof typeof skillConfig];
            const Icon = cfg.icon;
            return (
              <Link
                key={skill}
                href={`/skills/${skill}`}
                className={cn('bg-white/5 rounded-2xl p-5 border card-hover cursor-pointer', cfg.border)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', cfg.bg)}>
                      <Icon size={20} className={cfg.text} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{cfg.label}</p>
                      <p className="text-xs text-white/40">{sessionsCompleted} phiên học</p>
                    </div>
                  </div>
                  <span className={cn('text-2xl font-bold', cfg.text)}>{average}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full bg-gradient-to-r progress-bar', cfg.color)}
                    style={{ width: `${average}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Current Topic */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Chủ đề đang học</h2>
        <div className={cn('rounded-2xl p-6 bg-gradient-to-br', topic.coverColor, 'relative overflow-hidden')}>
          <div className="absolute right-4 top-4 text-6xl opacity-20">{topic.icon}</div>
          <div className="relative">
            <p className="text-white/80 text-sm mb-1">{topic.titleVi}</p>
            <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
            <p className="text-white/70 text-sm mb-5 max-w-md">{topic.descriptionVi}</p>
            <div className="flex gap-4 flex-wrap">
              {[
                { label: 'Ngữ cảnh', value: totalContexts },
                { label: 'Câu mẫu', value: totalPhrases },
                { label: 'Hội thoại', value: totalDialogs },
                { label: 'Từ vựng', value: totalVocab },
              ].map(({ label, value }) => (
                <div key={label} className="bg-black/20 rounded-xl px-4 py-2 text-center">
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="text-xs text-white/70">{label}</p>
                </div>
              ))}
            </div>
            <Link
              href={`/topics/${topic.id}`}
              className="mt-5 inline-flex items-center gap-2 bg-white text-gray-900 font-semibold rounded-xl px-5 py-2.5 text-sm hover:bg-white/90 transition-colors"
            >
              <BookOpen size={16} />
              Học ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access to Contexts */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Ngữ cảnh nhanh</h2>
        <div className="grid grid-cols-2 gap-3">
          {topic.contexts.map((ctx) => (
            <Link
              key={ctx.id}
              href={`/topics/${topic.id}/${ctx.id}`}
              className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-colors group"
            >
              <span className="text-2xl">{ctx.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-sm truncate">{ctx.titleVi}</p>
                <p className="text-xs text-white/40">{ctx.phrases.length} câu • {ctx.dialogs.length} hội thoại</p>
              </div>
              <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
