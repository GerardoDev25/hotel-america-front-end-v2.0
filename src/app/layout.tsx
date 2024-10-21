import type { Metadata } from 'next';
import { inter } from '@/config/fonts';

import { RootClientLayout } from '@/components/layout/';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Hotel | America',
    default: 'Home - Hotel | America',
  },
  description: 'Administration hotel system',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

// todo check if server is on
export default function RootLayout({ children }: Props) {
  return (
    // <html lang='en' className='dark'>
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
