import { Inter, Montserrat_Alternates, Dancing_Script } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const fontTitle = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const fontSubtitle = Dancing_Script({
  subsets: ['vietnamese'],
  weight: '700',
});
