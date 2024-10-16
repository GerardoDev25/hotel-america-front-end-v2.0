'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

import { useSideMenuStore } from '@/store/ui';
import { NotificationError, Title } from '@/components/ui';
import { useUserStore } from '@/store/user/user-store';
import { useAuthStore } from '@/store/auth';
import { login } from '@/actions/auth';

type FormInputs = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const route = useRouter();

  const triggerToast = useSideMenuStore((s) => s.triggerToast);
  const setUser = useUserStore((s) => s.setUser);
  const setIsAuth = useAuthStore((s) => s.setIsAuth);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setPending(true);
    const { password, username } = data;
    const { ok, errors, user } = await login({ password, username });
    setPending(false);
    setIsAuth(ok);
    if (ok) {
      setUser(user!);
      triggerToast(`welcome ${user?.name}`, { autoClose: 1000 }, 'success');
      route.replace(`/${user?.role}`);
    } else {
      triggerToast(<NotificationError errors={errors!} />, {
        autoClose: 2500,
        position: 'top-center',
      });
    }
  };

  return (
    <div className='flex justify-center items-center h-screen dark:bg-dark-bg'>
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
              className={clsx(
                'w-full p-3 border rounded-lg bg-gray-100 dark:bg-dark-accent text-textDark dark:text-dark-text focus:outline-none',
                {
                  'border-red-500': !!errors.username,
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
              id='password'
              className={clsx(
                'w-full p-3 border rounded-lg bg-gray-100 dark:bg-dark-accent text-textDark dark:text-dark-text focus:outline-none',
                {
                  'border-red-500': !!errors.password,
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
