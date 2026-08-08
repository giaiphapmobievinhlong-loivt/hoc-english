'use client';

import { useEffect, useState } from 'react';
import { getOverallStats, getProgress, getTotalItemsCompleted, getStudyStreak } from '@/lib/progress';
import { allTopics } from '@/data';
import { cn } from '@/lib/cn';
import { Headphones, Mic, FileText, PenLine, Flame, Trophy, Target, Calendar } from 'lucide-react';

const skillConfig = {
  listening: { label: 'Nghe', icon: Headphones, color: 'from-blue-500 to-blue-600', text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  speaking: { label: 'Nói', icon: Mic, color: 'from-green-500 to-emerald-600', text: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  reading: { label: 'Đọc', icon: FileText, color: 'from-yellow-500 to-amber-600', text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  writing: { label: 'Viết', icon: PenLine, color: 'from-purple-500 to-violet-600', text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
};

export default function ProgressPage() {
  const [stats, setStats] = useState<ReturnType<typeof getOverallStats>>(() => [
    { skill: 'listening' as const, average: 0, sessionsCompleted: 0 },
    { skill: 'speaking' as const, average: 0, sessionsCompleted: 0 },
    { skill: 'reading' as const, average: 0, sessionsCompleted: 0 },
    { skill: 'writing' as const, average: 0, sessionsCompleted: 0 },
  ]);
  const [allProgress, setAllProgress] = useState<ReturnType<typeof getProgress>>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setStats(getOverallStats());
    setAllProgress(getProgress());
    setTotalItems(getTotalItemsCompleted());
    setStreak(getStudyStreak());
  }, []);

  const overallAvg = stats.length > 0 ? Math.round(stats.reduce((s, x) => s + x.average, 0) / stats.length) : 0;

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Tiến độ của bạn</h1>
        <p className="text-white/50">Theo dõi quá trình học tiếng Anh</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4">
        {[
          { icon: Flame, label: 'Ngày liên tiếp', value: streak, color: 'text-orange-400', bg: 'bg-orange-500/10' },
          { icon: Trophy, label: 'Điểm TB tổng', value: `${overallAvg}%`, color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { icon: Target, label: 'Mục đã học', value: totalItems, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { icon: Calendar, label: 'Phiên học', value: allProgress.length, color: 'text-purple-400', bg: 'bg-purple-500/10' },
        ].map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', bg)}>
              <Icon size={22} className={color} />
            </div>
            <div>
              <p className={cn('text-2xl font-bold', color)}>{value}</p>
              <p className="text-xs text-white/40">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Circle */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 flex items-center gap-8">
        <div className="relative w-28 h-28 flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="40" fill="none"
              stroke="url(#gradient)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${overallAvg * 2.51} 251`}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">{overallAvg}%</span>
            <span className="text-xs text-white/40">tổng thể</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Tiến độ tổng thể</h2>
          <p className="text-white/50 text-sm mb-4">
            {overallAvg === 0 ? 'Bắt đầu học để theo dõi tiến độ của bạn!' :
             overallAvg < 30 ? 'Bạn đang bắt đầu — hãy kiên trì!' :
             overallAvg < 60 ? 'Bạn đang tiến bộ tốt!' :
             overallAvg < 80 ? 'Rất tốt! Hãy tiếp tục!' :
             'Xuất sắc! Bạn gần đạt mục tiêu rồi!'}
          </p>
          <div className="flex gap-2 flex-wrap">
            {stats.map(({ skill, average }) => {
              const cfg = skillConfig[skill as keyof typeof skillConfig];
              return (
                <div key={skill} className={cn('px-3 py-1 rounded-full text-xs font-medium border', cfg.bg, cfg.text, cfg.border)}>
                  {cfg.label}: {average}%
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Detail */}
      <h2 className="text-lg font-semibold text-white mb-4">Chi tiết từng kỹ năng</h2>
      <div className="grid gap-4 mb-8">
        {stats.map(({ skill, average, sessionsCompleted }) => {
          const cfg = skillConfig[skill as keyof typeof skillConfig];
          const Icon = cfg.icon;
          return (
            <div key={skill} className={cn('rounded-2xl p-5 border', cfg.bg, cfg.border)}>
              <div className="flex items-center gap-4 mb-4">
                <div className={cn('w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center', cfg.color)}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{cfg.label}</p>
                  <p className="text-xs text-white/40">{sessionsCompleted} phiên đã học</p>
                </div>
                <span className={cn('text-3xl font-bold', cfg.text)}>{average}%</span>
              </div>
              <div className="h-3 bg-black/20 rounded-full overflow-hidden">
                <div
                  className={cn('h-full rounded-full bg-gradient-to-r progress-bar', cfg.color)}
                  style={{ width: `${average}%` }}
                />
              </div>
              {average === 0 && (
                <p className="text-xs text-white/30 mt-2">Chưa có dữ liệu. Bắt đầu luyện tập để xem tiến độ!</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Context Progress */}
      <h2 className="text-lg font-semibold text-white mb-4">Tiến độ theo ngữ cảnh</h2>
      <div className="space-y-3">
        {allTopics[0].contexts.map((ctx) => {
          const ctxProgress = allProgress.filter((p) => p.contextId === ctx.id);
          const avgScore = ctxProgress.length > 0
            ? Math.round(ctxProgress.reduce((s, p) => s + p.score, 0) / ctxProgress.length)
            : 0;
          const skillsDone = ctxProgress.map((p) => p.skill);

          return (
            <div key={ctx.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <span className="text-2xl flex-shrink-0">{ctx.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-sm">{ctx.titleVi}</p>
                <div className="flex gap-1 mt-1">
                  {(['listening', 'speaking', 'reading', 'writing'] as const).map((s) => {
                    const cfg = skillConfig[s];
                    return (
                      <div
                        key={s}
                        className={cn('w-5 h-5 rounded flex items-center justify-center',
                          skillsDone.includes(s) ? cn(cfg.bg, cfg.text) : 'bg-white/5 text-white/20'
                        )}
                        title={cfg.label}
                      >
                        <cfg.icon size={11} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-right">
                <p className={cn('text-xl font-bold', avgScore > 0 ? 'text-amber-400' : 'text-white/20')}>{avgScore}%</p>
                <p className="text-xs text-white/30">{ctxProgress.length} kỹ năng</p>
              </div>
            </div>
          );
        })}
      </div>

      {allProgress.length === 0 && (
        <div className="text-center py-16 bg-white/3 rounded-2xl border border-dashed border-white/10 mt-6">
          <p className="text-4xl mb-3">📊</p>
          <p className="text-white/50 font-medium">Chưa có dữ liệu</p>
          <p className="text-white/30 text-sm mt-1">Hãy bắt đầu học để thấy tiến độ tại đây!</p>
        </div>
      )}
    </div>
  );
}
