// 'use client';
interface Props {
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateDeleteButtons = ({ setIsUpdating }: Props) => {
  const onUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <div className='flex w-full sm:w-4/5 md:w-3/5 justify-around mr-4 sm:mr-10 mt-12'>
      <button className='w-1/3 btn-secondary' onClick={onUpdate}>
        Update
      </button>
      <button className='w-1/3 btn-danger'>Delete</button>
    </div>
  );
};
