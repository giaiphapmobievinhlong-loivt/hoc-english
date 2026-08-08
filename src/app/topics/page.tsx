import Link from 'next/link';
import { allTopics } from '@/data';
import { cn } from '@/lib/cn';

export default function TopicsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Chủ đề học</h1>
        <p className="text-white/50">Chọn chủ đề phù hợp với công việc và cuộc sống của bạn</p>
      </div>

      <div className="grid gap-6">
        {allTopics.map((topic) => {
          const totalPhrases = topic.contexts.reduce((s, c) => s + c.phrases.length, 0);
          const totalDialogs = topic.contexts.reduce((s, c) => s + c.dialogs.length, 0);
          const totalVocab = topic.contexts.reduce((s, c) => s + c.vocabulary.length, 0);
          return (
            <div key={topic.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className={cn('p-6 bg-gradient-to-r', topic.coverColor, 'relative overflow-hidden')}>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl opacity-20">{topic.icon}</div>
                <div className="relative">
                  <p className="text-white/80 text-sm">{topic.titleVi}</p>
                  <h2 className="text-2xl font-bold text-white mt-1">{topic.title}</h2>
                  <p className="text-white/70 text-sm mt-2 max-w-lg">{topic.descriptionVi}</p>
                  <div className="flex gap-3 mt-4">
                    {[
                      { v: topic.contexts.length, l: 'ngữ cảnh' },
                      { v: totalPhrases, l: 'câu mẫu' },
                      { v: totalDialogs, l: 'hội thoại' },
                      { v: totalVocab, l: 'từ vựng' },
                    ].map(({ v, l }) => (
                      <div key={l} className="bg-black/20 rounded-lg px-3 py-1.5 text-center">
                        <p className="text-lg font-bold text-white">{v}</p>
                        <p className="text-xs text-white/70">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contexts Grid */}
              <div className="p-4 grid grid-cols-2 gap-3">
                {topic.contexts.map((ctx) => (
                  <Link
                    key={ctx.id}
                    href={`/topics/${topic.id}/${ctx.id}`}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 flex items-center gap-3 transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{ctx.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {ctx.titleVi}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">
                        Level {ctx.level} · {ctx.phrases.length} câu · {ctx.dialogs.length} hội thoại
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn('w-1.5 h-1.5 rounded-full', i < ctx.level ? 'bg-amber-400' : 'bg-white/10')}
                        />
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="px-4 pb-4">
                <Link
                  href={`/topics/${topic.id}`}
                  className="w-full block text-center bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 font-semibold rounded-xl py-3 text-sm transition-colors border border-amber-500/20"
                >
                  Xem chi tiết chủ đề →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Coming Soon */}
      <div className="mt-6 bg-white/3 border border-white/10 border-dashed rounded-2xl p-8 text-center">
        <p className="text-3xl mb-3">🏗️</p>
        <p className="text-white/60 font-medium">Chủ đề mới sắp ra mắt</p>
        <p className="text-white/30 text-sm mt-1">Nhà hàng, Văn phòng, Du lịch, Mua sắm...</p>
      </div>
    </div>
  );
}
