import { redirect } from 'next/navigation';
import { allTopics } from '@/data';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type SkillId = 'listening' | 'speaking' | 'reading' | 'writing';

const skillMap: Record<SkillId, string> = {
  listening: 'listen',
  speaking: 'speak',
  reading: 'read',
  writing: 'write',
};

const skillInfo: Record<SkillId, { label: string; color: string; text: string; bg: string; desc: string }> = {
  listening: { label: 'Nghe', color: 'from-blue-500 to-blue-600', text: 'text-blue-400', bg: 'bg-blue-500/10', desc: 'Luyện nghe hội thoại thực tế theo từng ngữ cảnh' },
  speaking: { label: 'Nói', color: 'from-green-500 to-emerald-600', text: 'text-green-400', bg: 'bg-green-500/10', desc: 'Ghi âm và nhận AI feedback về phát âm của bạn' },
  reading: { label: 'Đọc', color: 'from-yellow-500 to-amber-600', text: 'text-yellow-400', bg: 'bg-yellow-500/10', desc: 'Đọc hiểu các bài viết, email, và nội dung kinh doanh' },
  writing: { label: 'Viết', color: 'from-purple-500 to-violet-600', text: 'text-purple-400', bg: 'bg-purple-500/10', desc: 'Luyện viết email, tin nhắn và phản hồi chuyên nghiệp' },
};

export default async function SkillPage({ params }: { params: Promise<{ skill: string }> }) {
  const { skill } = await params;
  if (!['listening', 'speaking', 'reading', 'writing'].includes(skill)) redirect('/');

  const skillId = skill as SkillId;
  const info = skillInfo[skillId];
  const subPath = skillMap[skillId];
  const topic = allTopics[0];

  const contextsWithContent = topic.contexts.filter((ctx) => {
    if (skillId === 'listening') return ctx.dialogs.length > 0;
    if (skillId === 'speaking') return ctx.phrases.length > 0;
    if (skillId === 'reading') return ctx.readingPassages.length > 0;
    if (skillId === 'writing') return ctx.writingPrompts.length > 0;
    return false;
  });

  return (
    <div className="p-8 max-w-4xl">
      <div className={cn('rounded-2xl p-8 bg-gradient-to-br mb-8', info.color)}>
        <h1 className="text-3xl font-bold text-white mb-2">Luyện {info.label}</h1>
        <p className="text-white/80">{info.desc}</p>
      </div>

      <h2 className="text-lg font-semibold text-white mb-4">Chọn ngữ cảnh để luyện</h2>

      {contextsWithContent.length === 0 ? (
        <div className="text-center py-16 bg-white/3 rounded-2xl border border-dashed border-white/10">
          <p className="text-4xl mb-3">🔜</p>
          <p className="text-white/50">Nội dung đang được cập nhật...</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {contextsWithContent.map((ctx) => (
            <Link
              key={ctx.id}
              href={`/topics/${topic.id}/${ctx.id}/${subPath}`}
              className={cn('bg-white/5 border border-white/10 hover:border-opacity-40 rounded-xl p-4 flex items-center gap-4 transition-all group card-hover', info.bg)}
            >
              <span className="text-2xl">{ctx.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-white group-hover:text-white transition-colors">{ctx.titleVi}</p>
                <p className="text-xs text-white/40 mt-0.5">
                  {skillId === 'listening' && `${ctx.dialogs.length} hội thoại`}
                  {skillId === 'speaking' && `${ctx.phrases.length} câu mẫu`}
                  {skillId === 'reading' && `${ctx.readingPassages.length} bài đọc`}
                  {skillId === 'writing' && `${ctx.writingPrompts.length} bài tập`}
                </p>
              </div>
              <span className={cn('text-xl transition-transform group-hover:translate-x-1', info.text)}>→</span>
            </Link>
          ))}
        </div>
      )}

      {/* All contexts */}
      {topic.contexts.filter((c) => !contextsWithContent.includes(c)).length > 0 && (
        <div className="mt-6">
          <p className="text-sm text-white/30 mb-3">Sắp có nội dung</p>
          <div className="grid gap-2">
            {topic.contexts.filter((c) => !contextsWithContent.includes(c)).map((ctx) => (
              <div key={ctx.id} className="bg-white/3 border border-dashed border-white/10 rounded-xl p-4 flex items-center gap-4 opacity-40">
                <span className="text-2xl">{ctx.icon}</span>
                <p className="text-white/50 text-sm">{ctx.titleVi}</p>
                <span className="ml-auto text-xs text-white/30">Sắp ra mắt</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
