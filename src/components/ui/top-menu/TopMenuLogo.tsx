import Link from 'next/link';
import { IoBusinessOutline } from 'react-icons/io5';
import { fontSubtitle } from '@/config/fonts';

interface Props {
  role: string;
}

export const TopMenuLogo = ({ role }: Props) => {
  return (
    <Link href={`/${role}`} className='flex cursor-pointer h-full items-center'>
      <IoBusinessOutline size={30} className='text-textDark' />

      <h1 className='pl-2 text-textDark text-xl font-bold'>
        HOTEL |{' '}
        <span className={`text-2xl ${fontSubtitle.className} antialiased`}>
          America
        </span>
      </h1>
    </Link>
  );
};
