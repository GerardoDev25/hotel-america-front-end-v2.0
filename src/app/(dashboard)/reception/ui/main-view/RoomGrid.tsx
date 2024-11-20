'use client';

import { IRoom } from '@/interfaces';
import { MainViewSkeleton, RoomItem } from '.';
import { useEffect, useState } from 'react';
import { Room } from '@/actions';
import { useNotificationStore } from '@/store';
import { NotificationError } from '@/components/ui';

interface Props {
  limit: number;
  page: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

export const RoomGrid = ({ page, limit, setTotalPages }: Props) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [isLoadDataFailed, setIsLoadDataFailed] = useState(false);

  const triggerToast = useNotificationStore((s) => s.triggerToast);

  useEffect(() => {
    const getRooms = async () => {
      setIsFetchingData(true);
      try {
        const { rooms = [], ...rest } = await Room.getAll({ page, limit });
        setRooms(rooms);

        if (rest.code === 200) {
          setIsLoadDataFailed(false);
          setTotalPages(Math.ceil(rest.total! / limit));
        } else {
          setIsLoadDataFailed(true);
          setTotalPages(1);
          triggerToast(<NotificationError errors={rest.errors ?? []} />, {
            autoClose: 3000,
            position: 'top-center',
            className: 'toastify-custom-notification',
            closeButton: true,
          });
        }
      } finally {
        setIsFetchingData(false);
      }
    };
    getRooms();
  }, [page, limit, setTotalPages, triggerToast]);

  if (isFetchingData) {
    return <MainViewSkeleton />;
  }

  if (isLoadDataFailed) {
    return (
      <div className='text-center text-2xl text-red-500 flex justify-center items-center h-[50vh]'>
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3'>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
};
