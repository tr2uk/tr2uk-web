import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/routing';

const SITE_URL = 'https://tr2uk.com';

// Builds per-route metadata with canonical + hreflang alternates.
export async function buildMetadata({
  locale,
  path,
  namespace,
  titleKey = 'title',
  descKey = 'intro',
}: {
  locale: string;
  path: string;
  namespace: string;
  titleKey?: string;
  descKey?: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const suffix = path ? `${path}/` : '';
  const canonical = `${SITE_URL}/${locale}/${suffix}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE_URL}/${l}/${suffix}`;
  }

  const title = t(titleKey);
  const description = t(descKey);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: ['/assets/banner.jpg'],
    },
  };
}
