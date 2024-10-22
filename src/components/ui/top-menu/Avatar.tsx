import { getInitials } from '@/utils';
import React from 'react';

interface Props {
  name: string;
}

export const Avatar = ({ name }: Props) => {
  const initials = getInitials(name);
  return (
    <div
      className='text-textDark bg-complementary p-5 rounded-[50%] cursor-pointer hover:bg-primary hover:text-white transition-colors duration-150 ease-in-out'
      onClick={() => console.log('open sidebar here')}
    >
      {initials}
    </div>
  );
};
