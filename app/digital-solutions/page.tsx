import type { Metadata } from 'next';
import Link from 'next/link';
import { getT, routeMetadata } from '@/lib/content';
import { Page, PageHeader, Placeholder } from '@/components/ui';

const t = getT('digital');

export const metadata: Metadata = routeMetadata(
  'digital-solutions',
  t('title'),
  t('intro')
);

export default function DigitalPage() {
  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />

      {/* TR2UK-POS */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">{t('pos.title')}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t('pos.body')}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-primary">Green House Bistro Café</h3>
            <p className="mt-2 text-slate-600">{t('pos.greenhouse')}</p>
            <div className="mt-4">
              <Placeholder label={t('pos.screenshot')} />
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-primary">Yaaze</h3>
            <p className="mt-2 text-slate-600">{t('pos.yaaze')}</p>
            <div className="mt-4">
              <Placeholder label={t('pos.screenshot')} />
            </div>
          </div>
        </div>
      </section>

      {/* B2Verify */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">{t('b2verify.title')}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t('b2verify.body')}</p>
        <a
          href="https://b2verify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
        >
          {t('b2verify.link')}
        </a>
      </section>

      {/* Taxi Fare Calculator */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">{t('taxi.title')}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t('taxi.body')}</p>
        <p className="mt-2 max-w-2xl text-sm text-slate-500">{t('taxi.scope')}</p>
        <a
          href="https://book.taxirye.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-primary px-5 py-2 font-medium text-primary hover:bg-primary hover:text-white"
        >
          {t('taxi.link')}
        </a>
      </section>

      {/* Cross-refs */}
      <section className="rounded-lg bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-primary">
          {t('crossRefs.title')}
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href="/fire-safety/"
              className="text-primary underline decoration-accent"
            >
              {t('crossRefs.fire')}
            </Link>
          </li>
          <li>
            <Link
              href="/food-hygiene/"
              className="text-primary underline decoration-accent"
            >
              {t('crossRefs.food')}
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  );
}
