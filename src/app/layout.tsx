'use client';

import clsx from 'clsx';
import { inter } from '@/config/fonts';
import { RootClientLayout } from '@/components/layout';
import { useThemeColor } from '@/store/ui';

import './globals.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  const isDarkMode = useThemeColor((s) => s.isDarkMode);

  return (
    <html lang='en' className={clsx({ dark: isDarkMode })}>
      <body className={`${inter.className} antialiased`}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
