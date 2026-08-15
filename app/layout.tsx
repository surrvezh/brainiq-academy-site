import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BrainIQ Academy — Enrich the Brain with Abacus',
  description:
    'BrainIQ Academy offers premium abacus training for children aged 5–12. Build mental arithmetic speed, concentration, and memory. Classes in India, USA, UK, and Dubai. Offline centers in Sulur and Karanam Pettai, Tamil Nadu.',
  keywords: [
    'abacus classes', 'abacus training', 'mental math for kids', 'brain development children',
    'abacus franchise', 'abacus India', 'abacus USA', 'abacus Dubai', 'BrainIQ Academy',
    'abacus Sulur', 'abacus Tamil Nadu', 'abacus UK', 'abacus classes near me',
  ],
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  openGraph: {
    title: 'BrainIQ Academy — Enrich the Brain with Abacus',
    description: 'Premium abacus training for children. Available in India, USA, UK, Dubai. Franchise opportunities open.',
    url: SITE_CONFIG.siteUrl,
    siteName: 'BrainIQ Academy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrainIQ Academy' }],
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-navy text-text-primary antialiased">{children}</body>
    </html>
  );
}
