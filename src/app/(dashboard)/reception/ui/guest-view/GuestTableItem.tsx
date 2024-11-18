import Link from 'next/link';
import { IGuest } from '@/interfaces';

interface Props {
  guest: IGuest;
}

export const GuestTableItem = ({ guest }: Props) => {
  return (
    <tr
      key={guest.id}
      className='even:bg-backgroundLight-green odd:bg-backgroundLight dark:even:bg-dark-bg-light dark:odd:bg-dark-bg'
    >
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light hover:underline'>
        <Link href={`/reception/guest/${guest.id}`}>
          {guest.id.split('-').at(-1)}
        </Link>
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light hover:underline'>
        <Link href={`/reception/register/${guest.registerId}`}>
          {guest.registerId.split('-').at(-1)}
        </Link>
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {guest.name} {guest.lastName}
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {guest.di}
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {new Date(guest.checkIn).toLocaleDateString()}
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {guest.checkOut ? new Date(guest.checkOut).toLocaleDateString() : 'N/A'}
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {guest.roomNumber}
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {guest.phone}
      </td>
      <td className='px-4 py-3 text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
        {guest.city}
      </td>
    </tr>
  );
};
