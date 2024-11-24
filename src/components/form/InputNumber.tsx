import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface Props {
  label: string;
  inputAttributes?: React.ComponentProps<'input'>;
  className?: React.StyleHTMLAttributes<HTMLDivElement>['className'];
}

export const InputNumber = ({ label, inputAttributes, className }: Props) => {
  return (
    <div
      className={`w-[250px] max-w-sm relative mt-4 ${
        className ? className : ''
      }`}
    >
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize'>
        {label}
      </label>
      <div className='relative'>
        <button
          className='absolute h-8 w-8 right-10 top-1 my-auto px-2 flex items-center dark:bg-transparent rounded hover:bg-slate-200'
          type='button'
        >
          <IoRemoveOutline className='text-textDark dark:text-white' />
        </button>
        <input
          type='number'
          className='relative w-full pl-4 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-sm border border-gray-300 rounded transition duration-300 ease focus:outline-none focus:border-primary dark:border-dark-bg-light shadow-sm focus:shadow-md text-gray-700 dark:text-dark-text selection::appearance-none'
          min={0}
          {...inputAttributes}
        />
        <button
          className='absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center dark:bg-transparent rounded hover:bg-slate-200'
          type='button'
        >
          <IoAddOutline className='text-textDark dark:text-white' />
        </button>
      </div>
    </div>
  );
};
