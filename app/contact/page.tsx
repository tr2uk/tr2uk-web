import type { Metadata } from 'next';
import { getT, routeMetadata } from '@/lib/content';
import { Page, PageHeader, StaticForm, Field } from '@/components/ui';

const t = getT('contact');

export const metadata: Metadata = routeMetadata('contact', t('title'), t('intro'));

export default function ContactPage() {
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
