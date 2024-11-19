'use client';

import { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';

import { RoomGrid } from './ui/main-view';
import { useGetPageParam } from '@/hooks';
import { Pagination, Title } from '@/components/ui';

const LIMIT = 12;
export default function ReceptionPage() {
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = useGetPageParam();

  return (
    <div className='min-h-[calc(100vh-8rem)] flex flex-col'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
        <Title title={'Room Management'} />
        <button className='flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-accent dark:bg-dark-primary dark:text-dark-text dark:hover:bg-dark-accent dark:focus:ring-dark-accent'>
          <IoAddOutline />
          <span className='pl-2'>Create Room</span>
        </button>
      </div>
      <RoomGrid
        setTotalPages={setTotalPages}
        page={currentPage}
        limit={LIMIT}
      />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
