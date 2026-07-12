import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';

const INTRO =
  'TR2UK Digital Solutions – fikirleri sahada çalışan ürünlere dönüştürüyoruz. Aşağıdakilerin tamamı bizim geliştirdiğimiz, canlı kullanımdaki yazılımlar.';

export const metadata: Metadata = routeMetadata(
  'digital-solutions',
  'Dijital Çözümler · TR2UK Digital Solutions',
  INTRO
);

const badges = [
  "PIN'li personel girişi + rol ayrımı",
  'İstasyon mimarisi (Servis · Mutfak · Bar · Yönetici · Vitrin)',
  'Masa bazlı POS + modifiye/özel ürün',
  'Alerji notu + mutfak/bar yazdırma',
  'Masa & renk-kodlu rezervasyon',
  'Masa QR ile self-servis menü',
  '14 alerjen eşlemesi',
  'PWA (çevrimdışı)',
];

const gallery = [
  { src: '/assets/greenhouse-login.webp', w: 515, h: 765, caption: "PIN'li personel girişi" },
  { src: '/assets/greenhouse-hub.webp', w: 1108, h: 547, caption: 'İstasyon merkezi' },
  { src: '/assets/greenhouse-pos.webp', w: 1127, h: 802, caption: 'Masa bazlı sipariş ekranı' },
  { src: '/assets/greenhouse-dashboard.webp', w: 1115, h: 856, caption: 'Yönetici paneli – masa QR kodları' },
  { src: '/assets/greenhouse-showroom.webp', w: 810, h: 803, caption: 'Müşteri vitrini (sokaktan QR ile)' },
  { src: '/assets/greenhouse-menu.webp', w: 1084, h: 836, caption: 'Vitrin menü kategorileri' },
];

const yaazeGallery = [
  { src: '/assets/yaaze-hero.webp', w: 1037, h: 833, caption: 'Marka karşılama ekranı (Tripadvisor 4.9 · 1.221 yorum)' },
  { src: '/assets/yaaze-menu.webp', w: 799, h: 762, caption: 'Görselli menü kategorileri' },
  { src: '/assets/yaaze-order.webp', w: 506, h: 876, caption: 'Masa QR ile müşteri sipariş ekranı' },
  { src: '/assets/yaaze-choices.webp', w: 501, h: 883, caption: 'Sipariş özeti – modifiye & diyet seçenekleri' },
  { src: '/assets/yaaze-allergies.webp', w: 394, h: 620, caption: 'Diyet & alerji onayı (14 alerjen)' },
  { src: '/assets/yaaze-approval.webp', w: 562, h: 582, caption: 'Garson onay ekranı (müşteri siparişi → onay)' },
];

export default function DigitalPage() {
  return (
    <Page>
      <PageHeader title="Dijital Çözümler" intro={INTRO} />

      {/* SECTION 1 — RMS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary">
          TR2UK RMS – Restaurant Management System
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          Restoran işletmeleri için uçtan uca yönetim sistemi. Personel girişinden
          müşteri masasına, mutfak ekranından yönetici paneline tüm operasyon tek
          platformda. Çok-kiracılı mimari – her işletme ayrı ve izole çalışır.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {badges.map((b) => (
            <li
              key={b}
              className="rounded-full border border-accent/50 bg-accent/5 px-3 py-1 text-sm font-medium text-primary"
            >
              {b}
            </li>
          ))}
        </ul>

        {/* Case study — Green House */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-primary">
            Canlı: Green House – Old Town, Hastings
          </h3>
          <p className="mt-1 text-slate-600">
            Tripadvisor Travellers&rsquo; Choice 2025 · 4.9/5 · gerçek restoranda
            günlük operasyon.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.src}>
                <div className="flex h-64 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-primary p-3">
                  <Image
                    src={g.src}
                    width={g.w}
                    height={g.h}
                    alt={g.caption}
                    className="max-h-full w-auto max-w-full object-contain"
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm text-slate-600">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Case study — Yaaze */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-primary">
            Canlı: Yaaze – Hastings Sahili
          </h3>
          <p className="mt-1 text-slate-600">
            Tripadvisor Travellers&rsquo; Choice Best of the Best 2025 · 4.9/5 ·
            1.221 yorum. Müşteri masadan QR ile kendi siparişini verir, garson
            onaylar.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yaazeGallery.map((g) => (
              <figure key={g.src}>
                <div className="flex h-64 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-primary p-3">
                  <Image
                    src={g.src}
                    width={g.w}
                    height={g.h}
                    alt={g.caption}
                    className="max-h-full w-auto max-w-full object-contain"
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm text-slate-600">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — B2Verify */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary">
          B2Verify – İş Güven Skoru Motoru
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          UK&rsquo;nin ilk &lsquo;deep-link&rsquo; iş doğrulama ve güven skoru
          motoru: milyonlarca şirketin sahiplik ve direktör ağını çapraz analiz
          ederek riski görünür kılar, B2B kararlarını hızlandırır.
        </p>
        <a
          href="https://www.b2verify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
        >
          b2verify.com&rsquo;u ziyaret et →
        </a>
      </section>

      {/* SECTION 3 — Taxi Fare Calculator */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary">
          Taxi Fare Calculator – Canlı Ücret Hesaplama
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          Yolculuk ücretini anında hesaplayan web aracı; taksi ve transfer
          işletmeleri için rezervasyon öncesi şeffaf fiyatlandırma.
        </p>
        <a
          href="https://book.taxirye.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md border border-primary px-5 py-2 font-medium text-primary hover:bg-primary hover:text-white"
        >
          Canlı demo: book.taxirye.co.uk →
        </a>
      </section>

      {/* Cross-refs */}
      <section className="rounded-lg bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-primary">
          Ayrıca bizim geliştirdiğimiz:
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            <Link
              href="/fire-safety/"
              className="text-primary underline decoration-accent"
            >
              Fire Safety – Yangın Risk Değerlendirmesi (FRA) web uygulaması
            </Link>
          </li>
          <li>
            <Link
              href="/food-hygiene/"
              className="text-primary underline decoration-accent"
            >
              Food Hygiene – Gıda güvenliği belgelendirme ve eğitim
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  );
}
