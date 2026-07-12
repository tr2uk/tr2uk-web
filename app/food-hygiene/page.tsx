import type { Metadata } from 'next';
import { getT, routeMetadata } from '@/lib/content';
import { Page, PageHeader, StaticForm, Field } from '@/components/ui';

const t = getT('food');

export const metadata: Metadata = routeMetadata(
  'food-hygiene',
  t('title'),
  t('intro')
);

export default function FoodHygienePage() {
  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />
      <p className="max-w-2xl text-slate-600">{t('body')}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">{t('formTitle')}</h2>
        <StaticForm submitLabel={t('formTitle')}>
          <Field label={t('form.name')} name="name" />
          <Field label={t('form.email')} name="email" type="email" />
          <Field label={t('form.business')} name="business" />
          <Field label={t('form.message')} name="message" textarea />
        </StaticForm>
      </section>
    </Page>
  );
}
