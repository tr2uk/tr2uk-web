import type { Metadata } from 'next';
import { routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';

const INTRO = 'İçerikler yakında.';

export const metadata: Metadata = routeMetadata('blog', 'Blog', INTRO);

export default function BlogPage() {
  return (
    <Page>
      <PageHeader title="Blog" intro={INTRO} />
    </Page>
  );
}
