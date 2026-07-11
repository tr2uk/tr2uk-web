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
  return buildMetadata({ locale, path: 'fire-safety', namespace: 'fire' });
}

export default async function FireSafetyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'fire' });

  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />
      <p className="max-w-2xl text-slate-600">{t('body')}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">{t('formTitle')}</h2>
        <StaticForm submitLabel={t('formTitle')}>
          <Field label={t('form.name')} name="name" />
          <Field label={t('form.email')} name="email" type="email" />
          <Field label={t('form.property')} name="property" />
          <Field label={t('form.details')} name="details" textarea />
        </StaticForm>
      </section>
    </Page>
  );
}
