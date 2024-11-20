'use client';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

import { useNotificationStore, useUserStore, useAuthStore } from '@/store';
import { NotificationError, NotificationLogin, Title } from '@/components/ui';
import { Session } from '@/actions/auth';

interface Props {
  errorMessage?: string;
}

type FormInputs = {
  username: string;
  password: string;
};

export const LoginForm = ({ errorMessage }: Props) => {
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const triggerToast = useNotificationStore((s) => s.triggerToast);
  const setUser = useUserStore((s) => s.setUser);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);

  useEffect(() => {
    if (errorMessage && errorMessage !== '') {
      triggerToast(
        errorMessage,
        { autoClose: 2500, className: 'toastify-custom-notification' },
        'error'
      );
    }
  }, [triggerToast, errorMessage]);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setPending(true);
    const { password, username } = data;
    const { ok, errors, user } = await Session.login({ password, username });
    if (ok) {
      setUser(user!);
      triggerToast(
        <NotificationLogin name={user!.name} />,
        {
          autoClose: 2000,
          className: 'toastify-custom-notification',
          closeButton: false,
        },
        'success'
      );
    } else {
      triggerToast(<NotificationError errors={errors!} />, {
        autoClose: 2500,
        position: 'top-center',
        className: 'toastify-custom-notification',
        closeButton: false,
      });
    }
    setIsAuth(ok);
    setPending(false);
  };

  return (
    <div className='flex justify-center items-center h-screen dark:bg-dark-bg '>
      <div className='w-full max-w-md p-8 bg-white dark:bg-dark-primary shadow-md rounded-lg'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title
            title='Login'
            className='text-2xl font-bold text-center text-textDark dark:text-dark-text mb-6 '
          />
          {/* Email Input */}
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-textDark dark:text-dark-text mb-2'
            >
              Username:
            </label>
            <input
              type='text'
              id='username'
              placeholder='Enter your username'
              className={clsx(
                'w-full p-3 border rounded-lg bg-gray-100 dark:bg-dark-accent text-textDark dark:text-dark-text focus:outline-none dark:placeholder-white dark:placeholder:text-sm',
                {
                  'border-red-500 border-2': !!errors.username,
                }
              )}
              autoFocus
              {...register('username', { required: true })}
            />
          </div>

          {/* Password Input */}
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-textDark dark:text-dark-text mb-2'
            >
              Password:
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              id='password'
              className={clsx(
                'w-full p-3 border rounded-lg bg-gray-100 dark:bg-dark-accent text-textDark dark:text-dark-text focus:outline-none dark:placeholder-white dark:placeholder:text-sm',
                {
                  'border-red-500 border-2': !!errors.password,
                }
              )}
              {...register('password', { required: true, minLength: 4 })}
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={pending}
            className={clsx({
              'btn-primary': !pending,
              'btn-disable': pending,
            })}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
