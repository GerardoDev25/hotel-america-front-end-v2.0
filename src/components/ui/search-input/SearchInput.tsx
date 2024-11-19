import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
}) => {
  return (
    <div className='relative w-full max-w-md'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-bg-light bg-backgroundLight dark:bg-dark-bg text-textDark dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-primary dark:focus:border-dark-primary'
      />
      <span className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-dark-text'>
        <IoSearchOutline />
      </span>
    </div>
  );
};
