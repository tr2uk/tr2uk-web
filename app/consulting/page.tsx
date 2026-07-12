import type { Metadata } from 'next';
import { getT, routeMetadata } from '@/lib/content';
import { Page, PageHeader, Card, StaticForm, Field } from '@/components/ui';

const t = getT('consulting');

export const metadata: Metadata = routeMetadata(
  'consulting',
  t('title'),
  t('intro')
);

export default function ConsultingPage() {
  const services = ['marketEntry', 'tripod', 'deadlock', 'innovation'] as const;

  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <Card key={s} title={t(`services.${s}.title`)}>
            {t(`services.${s}.body`)}
          </Card>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-primary">{t('formTitle')}</h2>
        <StaticForm submitLabel={t('formTitle')}>
          <Field label={t('form.name')} name="name" />
          <Field label={t('form.email')} name="email" type="email" />
          <Field label={t('form.company')} name="company" />
          <Field label={t('form.message')} name="message" textarea />
        </StaticForm>
      </section>
    </Page>
  );
}
