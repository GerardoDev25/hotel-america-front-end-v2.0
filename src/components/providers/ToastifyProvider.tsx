'use client';
import { useEffect } from 'react';
// import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import { ToastContainerProps } from 'react-toastify/dist/types';
import 'react-toastify/dist/ReactToastify.css';
type Props = Readonly<{
  children: React.ReactNode;
}>;

export const ToastifyProvider = ({ children }: Props) => {
  // const notify = () => toast('Wow so easy !');

  useEffect(() => {
    toast('Wow so easy !');
  }, []);

  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};
