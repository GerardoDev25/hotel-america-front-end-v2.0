'use client';

import { useState } from 'react';
import { RoomGrid } from './ui/main-view';
import { useGetPageParam } from '@/hooks';
import { Pagination, Title } from '@/components/ui';

const LIMIT = 12;
export default function ReceptionPage() {
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = useGetPageParam();

  return (
    <div className='min-h-[calc(100vh-8rem)] flex flex-col'>
      <Title title={'Room List'} />
      <RoomGrid
        setTotalPages={setTotalPages}
        page={currentPage}
        limit={LIMIT}
      />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
