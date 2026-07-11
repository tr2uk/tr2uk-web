import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { navItems, localePath } from './nav';
import LocaleSwitcher from './LocaleSwitcher';

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <header className="bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href={localePath(locale, '')} className="text-lg font-bold tracking-wide">
          TR2UK
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.path)}
              className="text-slate-300 hover:text-accent"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher current={locale} />
      </div>
    </header>
  );
}
