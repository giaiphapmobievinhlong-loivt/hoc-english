import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTopics } from '@/data';
import { cn } from '@/lib/cn';
import { Headphones, Mic, FileText, PenLine, ChevronRight } from 'lucide-react';

const skills = [
  { id: 'listen', label: 'Nghe', labelEn: 'Listening', icon: Headphones, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', desc: 'Nghe hội thoại và luyện nghe theo tình huống thực tế' },
  { id: 'speak', label: 'Nói', labelEn: 'Speaking', icon: Mic, color: 'from-green-500 to-emerald-600', bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20', desc: 'Ghi âm và nhận phản hồi AI về phát âm của bạn' },
  { id: 'read', label: 'Đọc', labelEn: 'Reading', icon: FileText, color: 'from-yellow-500 to-amber-600', bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20', desc: 'Đọc hiểu bài viết và email liên quan đến chủ đề' },
  { id: 'write', label: 'Viết', labelEn: 'Writing', icon: PenLine, color: 'from-purple-500 to-violet-600', bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', desc: 'Luyện viết email, tin nhắn và nội dung kinh doanh' },
];

type Params = Promise<{ topicId: string; contextId: string }>;

export default async function ContextPage({ params }: { params: Params }) {
  const { topicId, contextId } = await params;
  const topic = allTopics.find((t) => t.id === topicId);
  const ctx = topic?.contexts.find((c) => c.id === contextId);
  if (!topic || !ctx) notFound();

  return (
    <div className="p-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
        <Link href="/topics" className="hover:text-white transition-colors">Chủ đề</Link>
        <ChevronRight size={14} />
        <Link href={`/topics/${topic.id}`} className="hover:text-white transition-colors">{topic.titleVi}</Link>
        <ChevronRight size={14} />
        <span className="text-white">{ctx.titleVi}</span>
      </div>

      {/* Context Header */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 flex items-start gap-5">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-4xl flex-shrink-0">
          {ctx.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-white">{ctx.titleVi}</h1>
            <span className="text-sm bg-amber-500/20 text-amber-400 px-3 py-0.5 rounded-full border border-amber-500/20">
              Level {ctx.level}
            </span>
          </div>
          <p className="text-white/60 mb-3">{ctx.descriptionVi}</p>
          <div className="flex gap-4 text-sm text-white/40">
            <span>📝 {ctx.phrases.length} câu mẫu</span>
            <span>💬 {ctx.dialogs.length} hội thoại</span>
            <span>📖 {ctx.vocabulary.length} từ vựng</span>
            {ctx.readingPassages.length > 0 && <span>🗒️ {ctx.readingPassages.length} bài đọc</span>}
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <h2 className="text-lg font-semibold text-white mb-4">Chọn kỹ năng muốn luyện</h2>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {skills.map((skill) => {
          const Icon = skill.icon;
          const hasContent =
            (skill.id === 'listen' && ctx.dialogs.length > 0) ||
            (skill.id === 'speak' && ctx.phrases.length > 0) ||
            (skill.id === 'read' && ctx.readingPassages.length > 0) ||
            (skill.id === 'write' && ctx.writingPrompts.length > 0);

          return (
            <Link
              key={skill.id}
              href={hasContent ? `/topics/${topic.id}/${ctx.id}/${skill.id}` : '#'}
              className={cn(
                'rounded-2xl p-5 border transition-all group',
                skill.bg, skill.border,
                hasContent ? 'card-hover cursor-pointer hover:border-opacity-50' : 'opacity-40 cursor-not-allowed'
              )}
            >
              <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4', skill.color)}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className={cn('text-lg font-bold mb-1', skill.text)}>{skill.label}</h3>
              <p className="text-sm text-white/50">{skill.desc}</p>
              {!hasContent && <p className="text-xs text-white/30 mt-2">Sắp có nội dung...</p>}
            </Link>
          );
        })}
      </div>

      {/* Key Phrases Preview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Câu mẫu quan trọng</h2>
          <Link href={`/topics/${topic.id}/${ctx.id}/speak`} className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
            Luyện nói tất cả →
          </Link>
        </div>
        <div className="space-y-2">
          {ctx.phrases.slice(0, 5).map((phrase) => (
            <div key={phrase.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-400 text-xs">🔤</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">{phrase.english}</p>
                <p className="text-white/40 text-sm mt-0.5">{phrase.vietnamese}</p>
                {phrase.phonetic && <p className="text-blue-400/60 text-xs mt-1 font-mono">{phrase.phonetic}</p>}
              </div>
            </div>
          ))}
          {ctx.phrases.length > 5 && (
            <p className="text-center text-white/30 text-sm pt-2">+{ctx.phrases.length - 5} câu nữa trong phần Nói</p>
          )}
        </div>
      </div>

      {/* Dialog Preview */}
      {ctx.dialogs.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Hội thoại mẫu</h2>
            <Link href={`/topics/${topic.id}/${ctx.id}/listen`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Xem tất cả →
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{ctx.dialogs[0].level <= 2 ? '🟢' : ctx.dialogs[0].level <= 3 ? '🟡' : '🔴'}</span>
              <div>
                <p className="font-semibold text-white">{ctx.dialogs[0].titleVi}</p>
                <p className="text-xs text-white/40">{ctx.dialogs[0].situationVi}</p>
              </div>
            </div>
            <div className="space-y-3">
              {ctx.dialogs[0].lines.slice(0, 4).map((line, i) => (
                <div key={i} className={cn('flex gap-3', line.speaker === 'you' ? 'flex-row-reverse' : 'flex-row')}>
                  <div className={cn('flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold',
                    line.speaker === 'you' ? 'bg-amber-500/30 text-amber-400' : 'bg-blue-500/30 text-blue-400')}>
                    {line.speaker === 'you' ? 'B' : 'K'}
                  </div>
                  <div className={cn('max-w-[75%] rounded-2xl px-4 py-2.5 text-sm',
                    line.speaker === 'you'
                      ? 'bg-amber-500/20 text-white rounded-tr-sm'
                      : 'bg-white/10 text-white rounded-tl-sm')}>
                    <p>{line.text}</p>
                    <p className="text-white/40 text-xs mt-1">{line.vietnamese}</p>
                  </div>
                </div>
              ))}
              {ctx.dialogs[0].lines.length > 4 && (
                <p className="text-center text-white/30 text-xs">+{ctx.dialogs[0].lines.length - 4} lượt trao đổi nữa...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
