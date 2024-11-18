'use client';

import { Pagination, Title } from '@/components/ui';
import { useGetPageParam } from '@/hooks';
import { useState } from 'react';
import { GuestTable } from '../ui/guest-view';

const LIMIT = 12;
export default function RegisterGuestPage() {
  const [totalPages, setTotalPages] = useState(1);
  const currentPage = useGetPageParam();

  return (
    <div className='min-h-[calc(100vh-8rem)] flex flex-col'>
      <Title title={'Room List'} />
      <GuestTable
        setTotalPages={setTotalPages}
        page={currentPage}
        limit={LIMIT}
      />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
