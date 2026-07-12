import type { Metadata } from 'next';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';
import ContactForm from '@/components/ContactForm';

const INTRO =
  'Bir proje, danışmanlık ya da işbirliği için bize yazın. En kısa sürede dönüş yaparız.';

export const metadata: Metadata = routeMetadata('contact', 'İletişim', INTRO);

export default function ContactPage() {
  return (
    <Page>
      <PageHeader title="İletişim" intro={INTRO} />

      <ContactForm />

      <p className="mt-8 text-slate-600">
        E-posta:{' '}
        <a
          href="mailto:hello@tr2uk.com"
          className="text-primary underline decoration-accent"
        >
          hello@tr2uk.com
        </a>
      </p>
      <p className="mt-1 text-sm text-slate-500">UK–Türkiye ekseninde.</p>
    </Page>
  );
}
