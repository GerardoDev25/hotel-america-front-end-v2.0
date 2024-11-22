import { ImSpinner2 } from 'react-icons/im';

export const HandlingRequestButton = ({
  text = 'Handling Request...',
}: {
  text?: string;
}) => {
  return (
    <button className='flex items-center btn-disable' disabled>
      {' '}
      <ImSpinner2 className='animate-spin' />
      <span className='pl-2'>{text}</span>
    </button>
  );
};
