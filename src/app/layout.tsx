import type { Metadata } from 'next';
import { Inter_Tight, Playfair_Display } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'NebulaFlow',
  description: 'Launch a futuristic single-page SaaS landing that clearly communicates value, plan options, and a token-based usage model (credits)',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}