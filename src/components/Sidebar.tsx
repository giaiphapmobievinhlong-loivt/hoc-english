'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import {
  LayoutDashboard,
  BookOpen,
  Headphones,
  Mic,
  FileText,
  PenLine,
  TrendingUp,
  GraduationCap,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/topics', label: 'Chủ đề', icon: BookOpen },
  { href: '/vocabulary', label: 'Từ vựng', icon: GraduationCap },
  { href: '/progress', label: 'Tiến độ', icon: TrendingUp },
];

const skillItems = [
  { href: '/skills/listening', label: 'Nghe', icon: Headphones, color: 'text-blue-400' },
  { href: '/skills/speaking', label: 'Nói', icon: Mic, color: 'text-green-400' },
  { href: '/skills/reading', label: 'Đọc', icon: FileText, color: 'text-yellow-400' },
  { href: '/skills/writing', label: 'Viết', icon: PenLine, color: 'text-purple-400' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#13132a] border-r border-white/5 flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl">
            🧋
          </div>
          <div>
            <h1 className="font-bold text-white text-sm leading-tight">English Master</h1>
            <p className="text-xs text-white/40">Học tiếng Anh mỗi ngày</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-wider px-3 mb-3">Tổng quan</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}

        <div className="pt-4">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider px-3 mb-3">Kỹ năng</p>
          {skillItems.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  active
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
              >
                <Icon size={18} className={item.color} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-white/5">
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg p-3 border border-amber-500/20">
          <p className="text-xs text-amber-400 font-semibold">💡 Mẹo hôm nay</p>
          <p className="text-xs text-white/60 mt-1">Luyện nói 15 phút mỗi ngày hiệu quả hơn 2 giờ mỗi tuần.</p>
        </div>
      </div>
    </aside>
  );
}
