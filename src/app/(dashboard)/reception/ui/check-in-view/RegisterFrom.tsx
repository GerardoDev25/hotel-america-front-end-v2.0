'use client';

import { IRegister } from '@/interfaces';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  roomId: string;
}

type FormInputs = Omit<IRegister, 'id'>;

export const RegisterForm: React.FC<Props> = ({ roomId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ defaultValues: { roomId } });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-lg mx-auto bg-backgroundLight dark:bg-dark-bg-light p-6 rounded-lg shadow-lg space-y-4'
    >
      {/* Check In */}
      <div>
        <label
          htmlFor='checkIn'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          Check In
        </label>
        <input
          type='datetime-local'
          id='checkIn'
          {...register('checkIn', { required: 'Check In is required' })}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors.checkIn && (
          <p className='text-red-500 text-sm mt-1'>{errors.checkIn.message}</p>
        )}
      </div>

      {/* Check Out */}
      <div>
        <label
          htmlFor='checkOut'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          Check Out
        </label>
        <input
          type='datetime-local'
          id='checkOut'
          {...register('checkOut')}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </div>

      {/* Guests Number */}
      <div>
        <label
          htmlFor='guestsNumber'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          Guests Number
        </label>
        <input
          type='number'
          id='guestsNumber'
          {...register('guestsNumber', {
            required: 'Guests number is required',
            min: 1,
          })}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors.guestsNumber && (
          <p className='text-red-500 text-sm mt-1'>
            {errors.guestsNumber.message}
          </p>
        )}
      </div>

      {/* Discount */}
      <div>
        <label
          htmlFor='discount'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          Discount (%)
        </label>
        <input
          type='number'
          id='discount'
          {...register('discount', {
            required: 'Discount is required',
            min: 0,
            max: 100,
          })}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors.discount && (
          <p className='text-red-500 text-sm mt-1'>{errors.discount.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label
          htmlFor='price'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          Price
        </label>
        <input
          type='number'
          id='price'
          {...register('price', { required: 'Price is required', min: 0 })}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors.price && (
          <p className='text-red-500 text-sm mt-1'>{errors.price.message}</p>
        )}
      </div>

      {/* User ID */}
      <div>
        <label
          htmlFor='userId'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          User ID
        </label>
        <input
          type='text'
          id='userId'
          {...register('userId', { required: 'User ID is required' })}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors.userId && (
          <p className='text-red-500 text-sm mt-1'>{errors.userId.message}</p>
        )}
      </div>

      {/* Room ID */}
      <div>
        <label
          htmlFor='roomId'
          className='block text-sm font-medium text-textDark dark:text-dark-text'
        >
          Room ID
        </label>
        <input
          type='text'
          id='roomId'
          {...register('roomId', { required: 'Room ID is required' })}
          className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors.roomId && (
          <p className='text-red-500 text-sm mt-1'>{errors.roomId.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className='w-full bg-primary text-white py-2 px-4 rounded hover:bg-accent transition-colors'
      >
        Submit
      </button>
    </form>
  );
};
