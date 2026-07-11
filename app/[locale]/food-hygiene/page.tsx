import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { Page, PageHeader, StaticForm, Field } from '@/components/ui';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: 'food-hygiene', namespace: 'food' });
}

export default async function FoodHygienePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'food' });

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
