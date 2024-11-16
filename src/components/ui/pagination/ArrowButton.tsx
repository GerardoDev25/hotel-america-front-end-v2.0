import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  icon: React.ReactNode;
}

export const ArrowButton = ({ icon, href }: Props) => {
  return (
    <li className='page-item '>
      <Link
        className='flex justify-center items-center w-10 h-10 sm:mx-5 page-link py-1.5 px-3 border-0 rounded color-transition bg-backgroundLight-dark hover:bg-backgroundLight-green dark:bg-dark-bg dark:hover:bg-dark-bg-light'
        href={href}
      >
        {icon}
      </Link>
    </li>
  );
};
