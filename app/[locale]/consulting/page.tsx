import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { Page, PageHeader, Card, StaticForm, Field } from '@/components/ui';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: 'consulting', namespace: 'consulting' });
}

export default async function ConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'consulting' });

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
