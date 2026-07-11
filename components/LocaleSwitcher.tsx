'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n/routing';

export default function LocaleSwitcher({ current }: { current: string }) {
  const pathname = usePathname() || `/${current}/`;

  function swap(locale: string) {
    const segments = pathname.split('/');
    // segments[0] === '' , segments[1] === locale
    segments[1] = locale;
    const next = segments.join('/');
    return next.endsWith('/') ? next : `${next}/`;
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={swap(locale)}
          className={
            locale === current
              ? 'font-bold text-accent'
              : 'text-slate-300 hover:text-white'
          }
          aria-current={locale === current ? 'true' : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
