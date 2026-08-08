import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTopics } from '@/data';
import { cn } from '@/lib/cn';
import { Headphones, Mic, FileText, PenLine } from 'lucide-react';

export default async function TopicPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  const topic = allTopics.find((t) => t.id === topicId);
  if (!topic) notFound();

  return (
    <div className="p-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
        <Link href="/topics" className="hover:text-white transition-colors">Chủ đề</Link>
        <span>/</span>
        <span className="text-white">{topic.titleVi}</span>
      </div>

      {/* Hero */}
      <div className={cn('rounded-2xl p-8 bg-gradient-to-br mb-8', topic.coverColor, 'relative overflow-hidden')}>
        <div className="absolute right-8 top-8 text-8xl opacity-20">{topic.icon}</div>
        <div className="relative">
          <h1 className="text-3xl font-bold text-white mb-2">{topic.title}</h1>
          <p className="text-white/80 mb-6 max-w-xl">{topic.descriptionVi}</p>
          <div className="flex gap-3 flex-wrap">
            {[
              { icon: Headphones, label: 'Nghe', color: 'bg-blue-500/30 text-blue-200', href: 'listen' },
              { icon: Mic, label: 'Nói', color: 'bg-green-500/30 text-green-200', href: 'speak' },
              { icon: FileText, label: 'Đọc', color: 'bg-yellow-500/30 text-yellow-200', href: 'read' },
              { icon: PenLine, label: 'Viết', color: 'bg-purple-500/30 text-purple-200', href: 'write' },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className={cn('flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium', color)}>
                <Icon size={16} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contexts */}
      <h2 className="text-xl font-bold text-white mb-4">Ngữ cảnh học ({topic.contexts.length})</h2>
      <div className="grid gap-4">
        {topic.contexts.map((ctx) => (
          <Link
            key={ctx.id}
            href={`/topics/${topic.id}/${ctx.id}`}
            className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-amber-500/30 rounded-2xl p-5 flex items-center gap-5 transition-all group card-hover"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
              {ctx.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">{ctx.titleVi}</h3>
                <span className="text-xs bg-white/10 text-white/50 px-2 py-0.5 rounded-full">Level {ctx.level}</span>
              </div>
              <p className="text-sm text-white/50 mb-3">{ctx.descriptionVi}</p>
              <div className="flex gap-4 text-xs text-white/40">
                <span>📝 {ctx.phrases.length} câu mẫu</span>
                <span>💬 {ctx.dialogs.length} hội thoại</span>
                <span>📖 {ctx.vocabulary.length} từ vựng</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={cn('w-2 h-2 rounded-full', i < ctx.level ? 'bg-amber-400' : 'bg-white/10')} />
              ))}
            </div>
            <span className="text-white/20 group-hover:text-amber-400 group-hover:translate-x-1 transition-all text-xl">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
