'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Room } from '@/actions';
import { useModalStore, useNotificationStore } from '@/store';
import {
  Modal,
  NotificationError,
  HandlingRequestButton,
} from '@/components/ui';

interface Props {
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
}

export const UpdateDeleteButtons = ({ setIsUpdating, roomId }: Props) => {
  const [isFetching, setIsFetching] = useState(false);
  const openModal = useModalStore((s) => s.openModal);
  const closeModal = useModalStore((s) => s.closeModal);
  const triggerToast = useNotificationStore((s) => s.triggerToast);

  const router = useRouter();

  const onUpdate = () => {
    setIsUpdating(true);
  };

  const handleDelete = async () => {
    setIsFetching(true);
    const { ok, errors, message } = await Room.destroy(roomId);

    setIsFetching(false);
    closeModal();
    if (ok) {
      triggerToast(
        message,
        {
          className: 'toastify-custom-notification',
        },
        'success'
      );
      router.replace('/reception');
    } else {
      triggerToast(<NotificationError errors={errors!} />, {
        position: 'top-center',
        className: 'toastify-custom-notification',
        closeButton: true,
      });
    }
  };

  return (
    <div className='flex w-full sm:w-4/5 md:w-3/5 justify-around mr-4 sm:mr-10 mt-12'>
      <button className='w-1/3 btn-secondary' onClick={onUpdate}>
        Update
      </button>
      <button
        disabled={isFetching}
        onClick={openModal}
        className='w-1/3 btn-danger'
      >
        Delete
      </button>
      <Modal>
        <div className='flex flex-col gap-4'>
          <p className='text-center'>
            Are you sure you want to delete this room?
          </p>
          <div className='flex justify-around'>
            <button
              onClick={closeModal}
              className={clsx({
                'btn-disable': isFetching,
                'btn-secondary': !isFetching,
              })}
            >
              Cancel
            </button>
            {isFetching ? (
              <HandlingRequestButton text='Deleting...' />
            ) : (
              <button onClick={handleDelete} className='btn-danger'>
                Delete
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
