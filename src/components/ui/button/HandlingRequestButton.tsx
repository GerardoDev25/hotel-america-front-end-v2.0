import { ImSpinner2 } from 'react-icons/im';

interface Props {
  text?: string;
  className?: React.StyleHTMLAttributes<HTMLButtonElement>['className'];
}

export const HandlingRequestButton = ({
  text = 'Handling Request...',
  className,
}: Props) => {
  return (
    <button
      disabled
      className={`flex items-center btn-disable ${className ? className : ''}`}
    >
      {' '}
      <ImSpinner2 className='animate-spin' />
      <span className='pl-2 text-center inline-block w-full'>{text}</span>
    </button>
  );
};
