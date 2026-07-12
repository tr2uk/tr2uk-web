// Central route table shared by header nav and footer.
export const navItems = [
  { key: 'home', path: '' },
  { key: 'consulting', path: 'consulting' },
  { key: 'digital', path: 'digital-solutions' },
  { key: 'publishing', path: 'publishing' },
  { key: 'fire', path: 'fire-safety' },
  { key: 'food', path: 'food-hygiene' },
  { key: 'blog', path: 'blog' },
  { key: 'contact', path: 'contact' },
] as const;

export function href(path: string) {
  return path ? `/${path}/` : '/';
}
