import type { Metadata } from 'next';
import Link from 'next/link';
import { getT, routeMetadata } from '@/lib/content';
import { Page, PageHeader } from '@/components/ui';

const t = getT('blog');

export const metadata: Metadata = routeMetadata('blog', t('title'), t('intro'));

// Static post index. Add MDX files under blog/<slug>/page.mdx and list them here.
const posts = [
  {
    slug: 'sample-post',
    title: 'UK pazarına giriş: ilk 90 gün',
    date: '2026-07-11',
    excerpt:
      'Birleşik Krallık pazarına girişte ilk üç ayda atılması gereken temel adımlar.',
  },
];

export default function BlogIndex() {
  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="rounded-lg border border-slate-200 p-6">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {post.date}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-primary">
              <Link href={`/blog/${post.slug}/`} className="hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}/`}
              className="mt-3 inline-block text-sm text-primary underline decoration-accent"
            >
              {t('readMore')}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
