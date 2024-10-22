import React from 'react';
import { TopMenuLogo } from './TopMenuLogo';

export const TopMenu = () => {
  return (
    <div className='w-full p-2 mb-2 flex justify-between items-center sm:h-15 h-20 bg-accent'>
      <TopMenuLogo />
      <p>TopMenu</p>
    </div>
  );
};
