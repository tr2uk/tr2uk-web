import type { Metadata } from 'next';
import messages from '@/messages/tr.json';

type Dict = Record<string, unknown>;

// Minimal synchronous accessor over the single Turkish string source.
export function getT(namespace: string) {
  const ns = namespace
    .split('.')
    .reduce<unknown>((o, k) => (o as Dict)?.[k], messages);

  const resolve = (key: string) =>
    key.split('.').reduce<unknown>((o, k) => (o as Dict)?.[k], ns);

  const t = (key: string) => {
    const v = resolve(key);
    return typeof v === 'string' ? v : key;
  };
  t.raw = (key: string) => resolve(key);
  return t;
}

const SITE_URL = 'https://tr2uk.com';

// Per-route metadata with a root canonical (single language, no hreflang).
export function routeMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  const url = path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ['/assets/banner.jpg'] },
  };
}
