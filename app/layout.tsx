import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://tr2uk.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TR2UK',
    template: '%s · TR2UK',
  },
  description:
    'TR2UK — consulting, digital solutions, publishing and compliance services bridging Türkiye and the United Kingdom.',
  openGraph: {
    type: 'website',
    siteName: 'TR2UK',
    url: SITE_URL,
    images: ['/assets/banner.jpg'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TR2UK',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  email: 'hello@tr2uk.com',
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TR2UK',
  url: SITE_URL,
  image: `${SITE_URL}/assets/banner.jpg`,
  email: 'ck@tr2uk.com',
  areaServed: ['GB', 'TR'],
  serviceType: [
    'Consulting',
    'Digital Solutions',
    'Publishing',
    'Fire Safety',
    'Food Safety',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
