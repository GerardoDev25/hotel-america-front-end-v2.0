import { BiMessageError } from 'react-icons/bi';

interface Props {
  errors: string[];
}

export const NotificationError = ({ errors }: Props) => {
  return (
    <>
      <div className='flex items-center'>
        <BiMessageError />
        <h3 className='font-bold text-xl text-red-500 ml-1'>
          Something went wrong
        </h3>
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-gray-200 my-2' />

      <p className='text- text-gray-500 mb-2'>Errors:</p>

      <ul>
        {errors.map((error, index) => (
          <li key={index} className='bg-red-500 text-white p-1 rounded-md mb-2'>
            {error}
          </li>
        ))}
      </ul>
    </>
  );
};
