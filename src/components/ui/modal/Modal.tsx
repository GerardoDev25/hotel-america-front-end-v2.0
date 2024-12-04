'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useModalStore } from '@/store/ui';
import { IoCloseSharp } from 'react-icons/io5';

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  const closeModal = useModalStore((s) => s.closeModal);
  const isModalOpen = useModalStore((s) => s.isModalOpen);

  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsVisible(true);
    } else if (isVisible) {
      setIsExiting(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpen, isVisible]);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div
      className={clsx(
        `fixed inset-0 bg-dark-bg bg-opacity-80 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm`,
        { 'fade-in': !isExiting, 'fade-out': isExiting }
      )}
    >
      <div className='bg-backgroundLight dark:bg-dark-bg-light p-6 rounded-lg shadow-lg w-full max-w-md'>
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 text-dark-text hover:text-red-700 dark:hover:text-red-700 dark:text-backgroundLight transition-colors'
        >
          <IoCloseSharp size={30} />
        </button>
        <div className='text-textDark dark:text-dark-text'>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
