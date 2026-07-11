import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { localePath } from '@/components/nav';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '',
    namespace: 'home',
    titleKey: 'heroTitle',
    descKey: 'heroSubtitle',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'home' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const branches = [
    { key: 'consulting', path: 'consulting' },
    { key: 'digital', path: 'digital-solutions' },
    { key: 'publishing', path: 'publishing' },
    { key: 'fire', path: 'fire-safety' },
    { key: 'food', path: 'food-hygiene' },
  ] as const;

  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t('heroKicker')}
            </p>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
              {t('heroTitle')}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{t('heroSubtitle')}</p>
            <Link
              href={localePath(locale, 'consulting')}
              className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-primary hover:opacity-90"
            >
              {t('heroCta')}
            </Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banner.webp"
            alt="TR2UK"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-8 text-2xl font-bold text-primary">
          {t('branchesTitle')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <Link
              key={b.key}
              href={localePath(locale, b.path)}
              className="rounded-lg border border-slate-200 p-6 transition hover:border-accent hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary">
                {tNav(b.key)}
              </h3>
              <p className="mt-2 text-slate-600">
                {t(`branches.${b.key}`)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
