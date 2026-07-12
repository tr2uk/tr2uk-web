import type { Metadata } from 'next';
import Link from 'next/link';
import { routeMetadata } from '@/lib/content';

export const metadata: Metadata = routeMetadata(
  '',
  'TR2UK – Engineering Logic ile stratejik problem çözme',
  'Danışmanlık, dijital çözümler, yayıncılık ve uyum & güvenlik hizmetleri. UK–Türkiye ekseninde, fikirden ürüne analitik ve ölçülebilir adımlarla.'
);

const branches = [
  {
    title: 'Consulting',
    path: '/consulting/',
    desc: 'UK pazarına giriş, Ar-Ge ve inovasyon, önemli sorunlar için stratejik çözüm geliştirme.',
  },
  {
    title: 'Digital Solutions',
    path: '/digital-solutions/',
    desc: 'Restaurant Management System (RMS) sistemleri, B2Verify business güven skoru motoru, Taxi Fare Calculator: ürüne dönüşmüş yazılımlar.',
  },
  {
    title: 'Publishing',
    path: '/publishing/',
    desc: 'The Baird Effect ve UK iş rehberi: yapay zekâ çağında girişimcilik.',
  },
  {
    title: 'Fire Safety',
    path: '/fire-safety/',
    desc: 'Yangın Risk Değerlendirmesi (FRA) ve uyum çözümleri.',
  },
  {
    title: 'Food Hygiene',
    path: '/food-hygiene/',
    desc: 'Gıda güvenliği belgelendirme ve eğitim.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/banner.webp)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Engineering Logic ile stratejik problem çözme
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Karmaşık iş problemlerini çözülebilir sistemlere dönüştürüyoruz.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Danışmanlıktan yazılıma, yayıncılıktan uyum ve güvenlik çözümlerine –
            fikirden ürüne giden yolu analitik, hesaplanabilir ve ölçülebilir
            adımlarla kuruyoruz. UK–Türkiye ekseninde.
          </p>
          <p className="mt-6 inline-block rounded-md border border-accent/40 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-accent">
            analitik · hesaplanabilir · çözülebilir
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="rounded-md bg-accent px-6 py-3 font-semibold text-primary hover:opacity-90"
            >
              Görüşme planlayın
            </Link>
            <Link
              href="/digital-solutions/"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:border-accent hover:text-accent"
            >
              Çözümlerimiz
            </Link>
          </div>
        </div>
      </section>

      {/* Branch cards */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <Link
              key={b.title}
              href={b.path}
              className="group flex flex-col rounded-lg border border-slate-200 p-6 transition hover:border-accent hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-primary group-hover:text-primary">
                {b.title}
              </h2>
              <p className="mt-3 flex-1 text-slate-600">{b.desc}</p>
              <span className="mt-4 text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">
                Detaylar →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
