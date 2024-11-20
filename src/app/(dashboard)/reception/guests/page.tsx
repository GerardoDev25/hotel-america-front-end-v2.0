'use client';

import { useGetPageParam } from '@/hooks';
import { useState } from 'react';
import { GuestTable } from '../ui/guest-view';
import { Pagination, SearchInput, Title } from '@/components/ui';

const LIMIT = 12;
export default function RegisterGuestPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const [totalPages, setTotalPages] = useState(1);
  const currentPage = useGetPageParam();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='min-hight-custom flex flex-col'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
        <Title title={'Guest List'} />
        <SearchInput
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Search Guest...'
        />
      </div>
      <GuestTable
        setTotalPages={setTotalPages}
        page={currentPage}
        limit={LIMIT}
      />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
