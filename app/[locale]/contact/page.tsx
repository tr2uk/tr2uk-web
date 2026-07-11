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
  return buildMetadata({ locale, path: 'contact', namespace: 'contact' });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />

      <p className="text-slate-600">
        {t('emailLabel')}:{' '}
        <a
          href="mailto:hello@tr2uk.com"
          className="text-primary underline decoration-accent"
        >
          hello@tr2uk.com
        </a>{' '}
        ·{' '}
        <a
          href="mailto:ck@tr2uk.com"
          className="text-primary underline decoration-accent"
        >
          ck@tr2uk.com
        </a>
      </p>

      <StaticForm submitLabel={t('form.message')}>
        <Field label={t('form.name')} name="name" />
        <Field label={t('form.email')} name="email" type="email" />
        <Field label={t('form.message')} name="message" textarea />
      </StaticForm>
    </Page>
  );
}
