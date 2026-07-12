import { getT } from '@/lib/content';

export default function Footer() {
  const t = getT('footer');

  return (
    <footer className="mt-16 bg-primary text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            {t('brandsTitle')}
          </h2>
          <ul className="space-y-1 text-sm">
            <li>{t('brands.digital')}</li>
            <li>{t('brands.publishing')}</li>
            <li>{t('brands.fire')}</li>
            <li>{t('brands.food')}</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
            {t('contactTitle')}
          </h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="mailto:ck@tr2uk.com" className="hover:text-white">
                ck@tr2uk.com
              </a>
            </li>
            <li>
              <a href="mailto:hello@tr2uk.com" className="hover:text-white">
                hello@tr2uk.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © 2026 TR2UK. {t('rights')}
      </div>
    </footer>
  );
}
