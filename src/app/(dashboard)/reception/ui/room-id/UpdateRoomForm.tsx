'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { CheckBox, InputNumber, SelectInput } from '@/components/form';
import { IRoom, RoomState, RoomType } from '@/interfaces';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: { ...room },
  });

  const onCancelUpdate = () => {
    setIsUpdating(false);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log({ data, errors });
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
              <button type='submit' className='w-[47%] btn-secondary'>
                Update
              </button>
              <button className='w-[47%] btn-danger' onClick={onCancelUpdate}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
