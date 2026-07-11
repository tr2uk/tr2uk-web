export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export const routing = {
  locales,
  defaultLocale,
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
