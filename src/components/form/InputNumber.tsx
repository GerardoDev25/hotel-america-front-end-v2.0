// 'use client';

import { useId } from 'react';
// import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface Props {
  label: string;
  inputAttributes?: React.ComponentProps<'input'>;
  className?: React.StyleHTMLAttributes<HTMLDivElement>['className'];
}

export const InputNumber = ({ label, inputAttributes, className }: Props) => {
  const inputId = useId();

  // const [value, setValue] = useState<number>(
  //   Number(inputAttributes?.defaultValue) || 0
  // );

  // const handleIncrement = () => {
  //   setValue((prev) => prev + 1);
  // };

  // const handleDecrement = () => {
  //   setValue((prev) => (prev > 0 ? prev - 1 : 0));
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value ? parseInt(e.target.value, 10) : 0;
  //   setValue(newValue);
  // };

  return (
    <div className={`w-full relative mt-4 ${className ? className : ''}`}>
      <label
        htmlFor={inputId}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize'
      >
        {label}
      </label>
      <div className='relative'>
        {/* <button
          className='absolute z-10 h-8 w-8 right-10 top-1 my-auto px-2 flex items-center dark:bg-transparent rounded hover:bg-slate-200'
          type='button'
          onClick={handleDecrement}
        >
          <IoRemoveOutline className='text-textDark dark:text-white' />
        </button> */}
        <input
          id={inputId}
          type='number'
          className='relative w-full pl-4 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-sm border border-gray-300 rounded transition duration-300 ease focus:outline-none focus:border-primary dark:border-dark-bg-light shadow-sm focus:shadow-md text-gray-700 dark:text-dark-text selection::appearance-none'
          min={1}
          // value={value}
          // onChange={handleInputChange}
          {...inputAttributes}
        />
        {/* <button
          className='absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center dark:bg-transparent rounded hover:bg-slate-200'
          type='button'
          onClick={handleIncrement}
        >
          <IoAddOutline className='text-textDark dark:text-white' />
        </button> */}
      </div>
    </div>
  );
};
