'use client';

import { login } from '@/actions/auth';
import { Title } from '@/components/ui';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const route = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { password, username } = data;
    const resp = await login({ password, username });

    // todo handle error

    if (resp.ok) {
      route.replace(`/${resp.user?.role}`);
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
            className='w-full bg-primary dark:bg-dark-primary text-white dark:text-dark-text py-3 rounded-lg hover:bg-accent dark:hover:bg-dark-accent transition-colors'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
