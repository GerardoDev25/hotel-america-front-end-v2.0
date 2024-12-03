import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-dark-bg bg-opacity-80 flex items-center justify-center z-50'>
      <div className='bg-backgroundLight dark:bg-dark-bg-light p-6 rounded-lg shadow-lg w-full max-w-md'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-dark-text hover:text-dark-complementary dark:text-backgroundLight dark:hover:text-accent transition-colors'
        >
          &times;
        </button>
        <div className='text-textDark dark:text-dark-text'>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
