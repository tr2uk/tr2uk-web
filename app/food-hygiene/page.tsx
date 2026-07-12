import type { Metadata } from 'next';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';
import LeadForm from '@/components/LeadForm';

const INTRO =
  'TR2UK Food Safety – işletmeler için gıda güvenliği denetim hazırlığı ve personel eğitimi. Level 3 belgeli eğitmen tarafından.';

export const metadata: Metadata = routeMetadata(
  'food-hygiene',
  'TR2UK Food Safety',
  INTRO
);

const auditScope = [
  'Yerinde inceleme',
  'Eksik ve risk tespiti',
  'Öncelikli yapılacaklar raporu',
  'Denetime hazırlık',
];

const trainingScope = [
  'Gıda mevzuatı',
  'Kontaminasyon türleri',
  'Sıcaklık kontrolü',
  'Kişisel hijyen',
  'Temizlik prosedürleri',
  'Haşere kontrolü',
  'Risk değerlendirmesi',
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {items.map((s) => (
        <li key={s} className="flex gap-2 text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FoodHygienePage() {
  return (
    <Page>
      <PageHeader title="Food Hygiene" intro={INTRO} />

      {/* SERVICE 1 — Audit prep */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">
          İşyeri Gıda Güvenliği Denetim Hazırlığı
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          İşletmenizi yerinde inceliyor, eksiklikleri tespit ediyor ve
          önceliklendirilmiş bir yapılacaklar raporuyla size sunuyoruz. Amaç:
          resmî denetime (EHO) hazır, eksikleri giderilmiş bir işletme.
        </p>
        <Bullets items={auditScope} />
      </section>

      {/* SERVICE 2 — Level 2 training */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-primary">
          Level 2 Gıda Hijyeni Eğitimi ve Belge
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          Personelinize Level 2 Gıda Hijyeni ve Güvenliği eğitimi veriyor,
          tamamlayan her çalışana belge düzenliyoruz. Eğitim Level 3 belgeli
          eğitmen tarafından verilir.
        </p>
        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Kapsam
        </h3>
        <Bullets items={trainingScope} />
      </section>

      {/* Refresh note */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="max-w-3xl leading-relaxed text-slate-600">
          Belgenin yasal bir son kullanma tarihi yoktur; sektör standardı ve EHO
          tavsiyesi, eğitimin her 3 yılda bir tazelenmesidir. Tazeleme zamanı
          için hatırlatma yapıyoruz.
        </p>
      </section>

      {/* Lead form */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Eğitim / denetim talebi
        </h2>
        <LeadForm source="food-hygiene" />
      </section>
    </Page>
  );
}
