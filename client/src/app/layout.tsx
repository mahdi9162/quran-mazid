import type { Metadata } from 'next';
import { Inter, Cinzel, Cinzel_Decorative } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cinzel-decorative',
});

export const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel-decorative',
});

export const metadata: Metadata = {
  title: 'Quran Mazid',
  description: 'Read, Study, and Learn the Holy Quran',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable}  h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
