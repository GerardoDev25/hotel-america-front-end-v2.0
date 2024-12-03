'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Room } from '@/actions';
import { cleanObject } from '@/utils';
import { useNotificationStore } from '@/store';
import { IRoom, RoomState, RoomType } from '@/interfaces';
import { CheckBox, InputNumber, SelectInput } from '@/components/form';
import { HandlingRequestButton, NotificationError } from '@/components/ui';

interface Props {
  room: IRoom;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormInputs = Omit<IRoom, 'id'>;

const roomTypes: { value: RoomType; label: RoomType }[] = [
  { label: 'normal', value: 'normal' },
  { label: 'suit', value: 'suit' },
];

const roomStates: { value: RoomState; label: string }[] = [
  { label: 'free', value: 'free' },
  { label: 'occupied', value: 'occupied' },
  { label: 'under maintenance', value: 'under_maintenance' },
  { label: 'pending cleaning', value: 'pending_cleaning' },
];

export const UpdateRoomForm = ({ room, setIsUpdating }: Props) => {
  const [isFetching, setIsFetching] = useState(false);
  const triggerToast = useNotificationStore((s) => s.triggerToast);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: { ...room },
  });

  const onCancelUpdate = () => {
    setIsUpdating(false);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsFetching(true);

    const dataToSend: Partial<IRoom> = {
      ...data,
      roomNumber:
        data.roomNumber !== room.roomNumber ? data.roomNumber : undefined,
    };

    const { ok, errors, message } = await Room.update({
      ...cleanObject(dataToSend),
      id: room.id,
    });

    if (ok) {
      triggerToast(
        message,
        {
          className: 'toastify-custom-notification',
        },
        'success'
      );
      router.refresh();
      setIsUpdating(false);
    } else {
      triggerToast(<NotificationError errors={errors!} />, {
        position: 'top-center',
        className: 'toastify-custom-notification',
        closeButton: true,
      });
    }
    setIsFetching(false);
  };

  return (
    <div className='w-full min-h-[90vh] sm:min-h-[60vh]'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto w-full max-w-[65rem] h-full pt-4 sm:pt-12'
      >
        <h2 className='text-2xl font-bold text-center'>Update Room</h2>
        <div className='w-full flex flex-col sm:flex-row pt-4'>
          <div className='w-full sm:w-1/2 sm:p-8'>
            <SelectInput
              label={'Room Type'}
              options={roomTypes}
              className='mt-6 sm:mt-4'
              optionAttributes={{ className: 'capitalize' }}
              defaultOptionValue={room.roomType}
              selectAttributes={{
                ...register('roomType', {
                  validate: (value) =>
                    roomTypes.map((s) => s.value).includes(value),
                }),
              }}
            />
            <InputNumber
              className='mt-6 sm:mt-4'
              label={'bets number'}
              inputAttributes={{ ...register('betsNumber') }}
            />

            <InputNumber
              className='mt-6 sm:mt-4'
              label={'room number'}
              inputAttributes={{ ...register('roomNumber') }}
            />
          </div>
          <div className='w-full sm:w-1/2 sm:p-8'>
            <SelectInput
              options={roomStates}
              label={'Room State'}
              className='mt-6 sm:mt-4'
              defaultOptionValue={room.state}
              selectAttributes={{
                ...register('state', {
                  validate: (value) =>
                    roomStates.map((s) => s.value).includes(value),
                }),
              }}
              optionAttributes={{ className: 'capitalize' }}
            />
            <CheckBox
              label={'Is Available'}
              className='mt-6 sm:mt-10'
              inputAttributes={{ ...register('isAvailable') }}
            />
            <div className='flex justify-between w-full mt-6 sm:mt-11'>
              {isFetching ? (
                <HandlingRequestButton text='Updating...' />
              ) : (
                <button type='submit' className='w-[47%] btn-secondary'>
                  Update
                </button>
              )}
              <button
                className={clsx(`w-[47%] btn-danger`, {
                  'btn-disable': isFetching,
                })}
                onClick={onCancelUpdate}
                disabled={isFetching}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
