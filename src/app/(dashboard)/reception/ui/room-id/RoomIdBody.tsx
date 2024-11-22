import { DividerY } from '@/components/ui';
import { IRoom } from '@/interfaces';
import React from 'react';
import { RoomStateTag } from '../../shared';

interface Props {
  room: IRoom;
}

export const RoomIdBody = ({ room }: Props) => {
  const { betsNumber, id, isAvailable, roomNumber, roomType, state } = room;

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

        <div className='flex w-full sm:w-4/5 md:w-3/5 justify-around mr-4 sm:mr-10 mt-12'>
          <button className='w-1/3 btn-secondary'>Update</button>
          <button className='w-1/3 btn-danger'>Update</button>
        </div>
      </div>
    </div>
  );
};
