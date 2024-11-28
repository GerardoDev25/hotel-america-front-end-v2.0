'use client';

import { useState } from 'react';

import { IRoom } from '@/interfaces';
import { DividerY } from '@/components/ui';
import { RoomStateTag } from '../../shared';
import { UpdateDeleteButtons, UpdateRoomForm } from '.';

interface Props {
  room: IRoom;
}

export const RoomIdBody = ({ room }: Props) => {
  const { betsNumber, id, isAvailable, roomNumber, roomType, state } = room;

  const [isUpdating, setIsUpdating] = useState(false);

  if (isUpdating) {
    return <UpdateRoomForm room={room} setIsUpdating={setIsUpdating} />;
  }

  return (
    <div className='flex flex-col sm:flex-row w-full h-[90vh] sm:h-[60vh] mt-4 gap-2 '>
      <div className='w-full sm:w-2/5  flex justify-center items-end sm:items-center sm:h-full'>
        <span className='pr-2 items-end sm:pt-8 md:pt-20 text-textDark font-bold dark:text-complementary'>
          Room N:{' '}
        </span>
        <strong className='text-4xl text-primary sm:text-7xl md:text-9xl'>
          {roomNumber}
        </strong>
      </div>
      <DividerY className='hidden sm:block' />
      <div className='pt-4 sm:pt-0 pl-4 flex flex-col justify-center items-center gap-4 w-full sm:w-3/5 sm:h-full '>
        <div className='flex w-1/2 items-end'>
          <p className='w-1/2 text-left lg:pl-16'>Status:</p>
          <RoomStateTag state={state} />
        </div>
        <div className='flex w-1/2 items-end'>
          <p className='w-1/2 text-left lg:pl-16'>Id:</p>
          <p>{id.split('-').at(-1)}</p>
        </div>
        <div className='flex w-1/2 items-end'>
          <p className='w-1/2 text-left lg:pl-16'>Room Type:</p>
          <p className='capitalize'>{roomType}</p>
        </div>
        <div className='flex w-1/2 items-end'>
          <p className='w-1/2 text-left lg:pl-16'>Bets N.:</p>
          <p className='capitalize'>{betsNumber}</p>
        </div>

        <div className='flex w-1/2 items-end'>
          <p className='w-1/2 text-left lg:pl-16'>Available:</p>
          <p className='capitalize'>{`${isAvailable}`}</p>
        </div>

        <UpdateDeleteButtons setIsUpdating={setIsUpdating} />
      </div>
    </div>
  );
};
