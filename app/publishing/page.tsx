import type { Metadata } from 'next';
import Image from 'next/image';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';

const INTRO =
  'TR2UK Publishing – yapay zekâ çağında girişimcilik ve UK’de iş kurma üzerine kaynaklar.';

export const metadata: Metadata = routeMetadata(
  'publishing',
  'TR2UK Publishing',
  INTRO
);

export default function PublishingPage() {
  return (
    <Page>
      <PageHeader title="Publishing" intro={INTRO} />

      {/* ITEM 1 — The Baird Effect (featured) */}
      <section className="mb-14 grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[220px]">
          <Image
            src="/assets/kitap.webp"
            width={938}
            height={1500}
            alt="The Baird Effect – Reinventing Start-ups in the Age of AI"
            className="w-full rounded-lg border border-slate-200 shadow-md"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">The Baird Effect</h2>
          <p className="mt-1 text-lg font-medium text-slate-500">
            Reinventing Start-ups in the Age of AI
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
            Yapay zekâ çağında girişimciliği ve start-up kurmayı yeniden düşünen
            kitap. 2025 · 205 sayfa · tüm Amazon mağazalarında.
          </p>
          <a
            href="https://amzn.eu/d/0b2gFaqI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-md bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
          >
            Amazon&rsquo;da satın al →
          </a>
        </div>
      </section>

      {/* ITEM 2 — UK İş Rehberi 2025 (free download) */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-primary">UK İş Rehberi 2025</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
          UK&rsquo;de iş kurmak isteyenler için ücretsiz başlangıç rehberi.
        </p>
        <a
          href="/assets/guide.pdf"
          download
          className="mt-4 inline-block rounded-md border border-primary px-5 py-2 font-medium text-primary hover:bg-primary hover:text-white"
        >
          Ücretsiz PDF indir →
        </a>
      </section>
    </Page>
  );
}
