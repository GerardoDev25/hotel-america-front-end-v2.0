'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoAddOutline, IoCheckmarkSharp } from 'react-icons/io5';

import { Room } from '@/actions';
import { RoomState } from '@/interfaces';
import { useNotificationStore } from '@/store';
import {
  Title,
  NotificationError,
  HandlingRequestButton,
} from '@/components/ui';

interface Props {
  state: RoomState;
  roomId: string;
}

export const RoomIdHeader = ({ state, roomId }: Props) => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const triggerToast = useNotificationStore((s) => s.triggerToast);
  const route = useRouter();

  const handleEnableRoom = async () => {
    setIsFetchingData(true);
    const { ok, errors, message } = await Room.update({
      id: roomId,
      state: 'free',
      isAvailable: true,
    });
    if (ok) {
      triggerToast(
        message,
        {
          className: 'toastify-custom-notification',
        },
        'success'
      );
      route.push('/reception');
    } else {
      triggerToast(<NotificationError errors={errors!} />, {
        position: 'top-center',
        className: 'toastify-custom-notification',
        closeButton: true,
      });
    }
    setIsFetchingData(false);
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
      <Title title='Room Management' className='mb-1' />
      {state !== 'free' ? (
        <>
          {isFetchingData ? (
            <HandlingRequestButton />
          ) : (
            <button
              className='flex items-center btn-primary'
              onClick={handleEnableRoom}
            >
              <IoCheckmarkSharp />
              <span className='pl-2'>Enable Room</span>
            </button>
          )}
        </>
      ) : (
        <button className='flex items-center btn-primary'>
          <IoAddOutline />
          <span className='pl-2'>Make Check-in</span>
        </button>
      )}
    </div>
  );
};
