import type { Metadata } from 'next';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';
import LeadForm from '@/components/LeadForm';

const INTRO =
  'TR2UK Fire Safety – işletmeler için Yangın Risk Değerlendirmesi (Fire Risk Assessment) ve uyum çözümleri.';

export const metadata: Metadata = routeMetadata(
  'fire-safety',
  'TR2UK Fire Safety',
  INTRO
);

const scope = [
  'Tesis incelemesi',
  'Tehlike ve risk tespiti',
  'Mevcut önlemlerin değerlendirilmesi',
  'Öncelikli tavsiyeler',
  'Yazılı FRA raporu',
];

export default function FireSafetyPage() {
  return (
    <Page>
      <PageHeader title="Fire Safety" intro={INTRO} />

      <p className="max-w-3xl leading-relaxed text-slate-600">
        İşletmenizin yasal yükümlülüğünü karşılayan, uygulanabilir bir Yangın Risk
        Değerlendirmesi. Web uygulamamızla hızlı, fotoğraf destekli bir süreç ve
        kapsamlı bir değerlendirme raporu.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-primary">Kapsam</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {scope.map((s) => (
            <li key={s} className="flex gap-2 text-slate-600">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 max-w-3xl text-slate-600">
        Restoran, ofis, perakende, HMO gibi küçük–orta ölçekli işletmeler.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Değerlendirme talebi</h2>
        <LeadForm source="fire-safety" />
      </section>
    </Page>
  );
}
