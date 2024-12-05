'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Room } from '@/actions';
import { useNotificationStore } from '@/store';
import { IRoom, RoomState, RoomType } from '@/interfaces';
import { CheckBox, InputNumber, SelectInput } from '@/components/form';
import { HandlingRequestButton, NotificationError } from '@/components/ui';
import { useRouter } from 'next/navigation';

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

export const CreateRoomForm = () => {
  const [isFetching, setIsFetching] = useState(false);
  const route = useRouter();

  const triggerToast = useNotificationStore((s) => s.triggerToast);

  const { register, handleSubmit } = useForm<FormInputs>();

  const onCancelCreate = () => {
    triggerToast(
      'Operation canceled',
      {
        className: 'toastify-custom-notification',
      },
      'info'
    );
    route.replace('/reception');
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsFetching(true);

    const { ok, errors, room } = await Room.create(data);

    if (ok) {
      triggerToast(
        <p>
          Room: <span className='font-bold'>{room?.roomNumber}</span> created
          successfully
        </p>,
        {
          className: 'toastify-custom-notification',
        },
        'success'
      );
      route.replace('/reception');
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
        <h2 className='text-2xl font-bold text-center'>Create Room</h2>
        <div className='w-full flex flex-col sm:flex-row pt-4'>
          <div className='w-full sm:w-1/2 sm:p-8'>
            <SelectInput
              label={'Room Type'}
              options={roomTypes}
              className='mt-6 sm:mt-4'
              optionAttributes={{ className: 'capitalize' }}
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
              inputAttributes={{
                ...register('betsNumber', { required: true, min: 1 }),
                placeholder: '1',
                min: 1,
              }}
            />

            <InputNumber
              className='mt-6 sm:mt-4'
              label={'room number'}
              inputAttributes={{
                ...register('roomNumber', { required: true, min: 1 }),
                placeholder: '100',
                min: 1,
              }}
            />
          </div>
          <div className='w-full sm:w-1/2 sm:p-8'>
            <SelectInput
              options={roomStates}
              label={'Room State'}
              className='mt-6 sm:mt-4'
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
                <HandlingRequestButton text='Creating...' className='w-[47%]' />
              ) : (
                <button type='submit' className='w-[47%] btn-secondary'>
                  Create
                </button>
              )}
              <button
                className={clsx(`w-[47%] btn-danger`, {
                  'btn-disable': isFetching,
                })}
                onClick={onCancelCreate}
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
