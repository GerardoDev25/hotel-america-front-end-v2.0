'use client';
// import { refreshToken } from '@/actions/auth';
// import { useDelayedEffect } from '@/hooks';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const PageClientLayout = ({ children }: Props) => {
  // useDelayedEffect(refreshToken);
  return <div>{children}</div>;
};
