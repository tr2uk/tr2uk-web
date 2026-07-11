import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { localePath } from '@/components/nav';
import { Page, PageHeader } from '@/components/ui';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: 'blog', namespace: 'blog' });
}

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

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  return (
    <Page>
      <PageHeader title={t('title')} intro={t('intro')} />
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded-lg border border-slate-200 p-6"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {post.date}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-primary">
              <Link
                href={`${localePath(locale, 'blog')}${post.slug}/`}
                className="hover:text-accent"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
            <Link
              href={`${localePath(locale, 'blog')}${post.slug}/`}
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
