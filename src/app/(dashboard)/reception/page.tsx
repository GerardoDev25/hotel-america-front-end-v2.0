'use client';

import { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';

import { RoomGrid } from './ui/main-view';
import { useGetPageParam } from '@/hooks';
import { Pagination, Title } from '@/components/ui';
import Link from 'next/link';

const LIMIT = 12;
export default function ReceptionPage() {
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = useGetPageParam();

  return (
    <div className='min-hight-custom flex flex-col'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
        <Title title={'Room Management'} />
        <Link
          className='flex items-center btn-primary'
          href={'/reception/room/new'}
        >
          <IoAddOutline />
          <span className='pl-2'>Create Room</span>
        </Link>
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
