'use client';

import { Guest } from '@/actions';
import { IGuest } from '@/interfaces';
import { useEffect, useState } from 'react';
import { GuestTableHead, GuestTableItem, SkeletonGuestTable } from '.';

interface Props {
  limit: number;
  page: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

const getGuest = async (page: number, limit: number) => {
  const { guests = [], ...rest } = await Guest.getAll({ page, limit });
  return { guests, ...rest };
};

export const GuestTable = ({ page, limit, setTotalPages }: Props) => {
  const [guests, setRooms] = useState<IGuest[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);
    getGuest(page, limit)
      .then(({ guests, total }) => {
        setRooms(guests);
        setTotalPages(Math.ceil(total! / limit));
      })
      .finally(() => setIsFetchingData(false));
  }, [page, limit, setTotalPages]);

  if (isFetchingData) {
    return <SkeletonGuestTable />;
  }
  return (
    <div className='overflow-x-auto custom-scrollbar-style'>
      <table className='min-w-full table-auto border-collapse border border-gray-200 dark:border-dark-bg-light'>
        <GuestTableHead />
        <tbody>
          {guests.map((guest) => (
            <GuestTableItem key={guest.id} guest={guest} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
