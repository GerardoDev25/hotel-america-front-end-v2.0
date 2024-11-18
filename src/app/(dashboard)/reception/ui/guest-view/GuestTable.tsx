'use client';

import { Guest } from '@/actions';
import { IGuest } from '@/interfaces';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SkeletonGuestTable } from '../../guests/ui';

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
        <thead className='bg-backgroundLight dark:bg-dark-bg'>
          <tr>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Id
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Register Id
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Name
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              DI
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Check-In
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Check-Out
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Room Number
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              Phone
            </th>
            <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
              City
            </th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              className='even:bg-backgroundLight-green odd:bg-backgroundLight dark:even:bg-dark-bg-light dark:odd:bg-dark-bg'
            >
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light hover:underline'>
                <Link href={`/reception/guest/${guest.id}`}>
                  {guest.id.split('-').at(-1)}
                </Link>
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light hover:underline'>
                <Link href={`/reception/register/${guest.registerId}`}>
                  {guest.registerId.split('-').at(-1)}
                </Link>
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {guest.name} {guest.lastName}
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {guest.di}
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {new Date(guest.checkIn).toLocaleDateString()}
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {guest.checkOut
                  ? new Date(guest.checkOut).toLocaleDateString()
                  : 'N/A'}
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {guest.roomNumber}
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {guest.phone}
              </td>
              <td className='px-4 py-2 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
                {guest.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
