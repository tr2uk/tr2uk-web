import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { Page, PageHeader } from '@/components/ui';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: 'publishing', namespace: 'publishing' });
}

export default async function PublishingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'publishing' });

  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />

      {/* The Baird Effect */}
      <section className="mb-14 grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
        <div className="max-w-[240px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/kitap.webp"
            alt={t('baird.title')}
            className="w-full rounded-md shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">{t('baird.title')}</h2>
          <p className="mt-2 text-slate-600">{t('baird.body')}</p>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
          >
            {t('baird.amazon')}
          </a>
        </div>
      </section>

      {/* UK Business Guide */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">{t('guide.title')}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t('guide.body')}</p>
        <a
          href="/assets/guide.pdf"
          className="mt-4 inline-block rounded-md border border-primary px-5 py-2 font-medium text-primary hover:bg-primary hover:text-white"
          download
        >
          {t('guide.download')}
        </a>
      </section>

      {/* Future books */}
      <section className="rounded-lg bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-primary">
          {t('future.title')}
        </h2>
        <p className="mt-2 text-slate-600">{t('future.body')}</p>
      </section>
    </Page>
  );
}
