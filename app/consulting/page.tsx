import type { Metadata } from 'next';
import Link from 'next/link';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';

const INTRO =
  'UK ile Türkiye arasında iş kuran şirket ve girişimcilere stratejik danışmanlık – Engineering Logic ile: analitik, hesaplanabilir, çözülebilir.';

export const metadata: Metadata = routeMetadata('consulting', 'Danışmanlık', INTRO);

function TripodNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        'flex min-h-[72px] flex-1 items-center justify-center rounded-lg border px-4 py-3 text-center text-sm font-semibold ' +
        (accent
          ? 'border-accent bg-accent/10 text-primary'
          : 'border-slate-300 bg-white text-slate-700')
      }
    >
      {label}
    </div>
  );
}

function Connector() {
  return (
    <div
      aria-hidden
      className="mx-auto h-6 w-px bg-accent sm:h-px sm:w-10 sm:flex-none"
    />
  );
}

export default function ConsultingPage() {
  return (
    <Page>
      <PageHeader title="Danışmanlık" intro={INTRO} />

      {/* SERVICE 1 — Tripod */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">
          UK Pazarına Giriş – Tripod Modeli
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          UK pazarına giriş üç ayak üzerinde durur: Türkiye tarafındaki
          şirket/girişimci, UK tarafındaki şirket/girişimci ve ikisini dengede
          tutan TR2UK köprüsü. Üç ayak birlikte kurulmadan pazara giriş
          sürdürülebilir olmaz.
        </p>

        {/* Tripod diagram */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <TripodNode label="Türkiye şirketi / girişimci" />
            <Connector />
            <TripodNode label="TR2UK Köprüsü" accent />
            <Connector />
            <TripodNode label="UK şirketi / girişimci" />
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {[
            'Pazara giriş stratejisi',
            'UK şirket kuruluşu',
            'İş planı',
            'Pazar ve rekabet analizi',
            'B2B eşleştirme',
          ].map((b) => (
            <li
              key={b}
              className="rounded-full border border-accent/50 bg-accent/5 px-3 py-1 text-sm font-medium text-primary"
            >
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICE 2 — Ar-Ge & İnovasyon */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">
          Ar-Ge &amp; İnovasyon ve Fon
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            'Ar-Ge/inovasyon proje yönetimi',
            'Hibe/fon başvuruları',
            'Marka',
            'Patent/fikri mülkiyet',
          ].map((b) => (
            <li key={b} className="flex gap-2 text-slate-600">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICE 3 — Stratejik Problem Çözme */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">
          Stratejik Problem Çözme
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          Kilitlenmiş iş ve mühendislik problemlerini Engineering Logic ile
          analitik, hesaplanabilir ve çözülebilir adımlara indirgiyoruz.
        </p>
      </section>

      {/* CTA */}
      <div className="rounded-lg bg-slate-50 p-6">
        <Link
          href="/contact/"
          className="inline-block rounded-md bg-accent px-6 py-3 font-semibold text-primary hover:opacity-90"
        >
          Görüşme planlayın
        </Link>
      </div>
    </Page>
  );
}
