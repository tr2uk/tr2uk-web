import Link from 'next/link';
import { getT } from '@/lib/content';
import { navItems, href } from './nav';

export default function Header() {
  const t = getT('nav');

  return (
    <header className="bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-wide">
          TR2UK
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={href(item.path)}
              className="text-slate-300 hover:text-accent"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
