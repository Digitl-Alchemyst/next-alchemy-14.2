/* eslint-disable react/function-component-definition */
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';
import { ErrorBoundary } from '@sentry/nextjs';
import ThemeProvider from '../components/providers/ThemeProvider';
import Header from '../components/global/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Alchemy 14.2 Final',
  description:
    'Final release of the Next Alchemy 14.2 Base Biolerplate for Next.js 14.2.*. This version is set for the final release of Next.js 14.2.16 which is the final version before Next 15. Use this to start a clean next project with eslint, prettier, commit linting and expanded next & typescript configs and huge tailwind css expansions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
