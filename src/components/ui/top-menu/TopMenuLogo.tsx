'use client';
import { fontSubtitle } from '@/config/fonts';
import { useUserStore } from '@/store/user';
import Link from 'next/link';
import { IoBusinessOutline } from 'react-icons/io5';

export const TopMenuLogo = () => {
  const user = useUserStore((state) => state.user);

  const url = `/${user.role}`;

  return (
    <Link href={url} className='flex cursor-pointer h-full items-center'>
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
