'use client';

import { useUserStore } from '@/store';
import { Title } from '../title/Title';
import { capitalizeText, getInitials } from '@/utils';
import { DividerX, DividerY } from '@/components/ui';

export const StaffProfile = () => {
  const user = useUserStore((s) => s.user);

  return (
    <>
      <Title title={'User Information'} className='hidden sm:block' />
      <div className='min-hight-custom sm:min-h-[calc(100vh-15rem)] flex justify-center items-center'>
        <div className='flex sm:flex-row flex-col bg-backgroundLight-dark dark:bg-dark-bg-light w-full h-96 sm:w-[700px] p-2 sm:p-10 rounded-md'>
          <div className='w-full sm:w-[40%] flex flex-col gap-4 justify-center items-center'>
            <Avatar name={user.name} />
            <p>{capitalizeText(user.name)}</p>
          </div>
          <DividerY className='hidden sm:block' />
          <DividerX className='sm:hidden block' />
          <div className='w-full sm:w-[59%] sm:pt-16'>
            <DataField label='Role' value={user.role} />
            <DataField
              label='Status'
              value={user.isActive ? 'Active' : 'Inactive'}
            />
            <DataField label='Bird Day' value={user.birdDate} />
            <DataField label='Phone' value={user.phone} />
            <DataField label='Username' value={user.username} />
          </div>
        </div>
      </div>
    </>
  );
};

const Avatar = ({ name }: { name: string }) => {
  const initials = getInitials(name);
  return (
    <div className='w-20 h-20 flex justify-center items-center font-bold text-2xl text-textDark bg-accent p5 rounded-[50%] cursor-pointer color-transition'>
      {initials}
    </div>
  );
};

const DataField = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex gap-2 w-full mb-2 '>
      <p className='w-[40%] '>{label}:</p>
      <p className='w-[60%]'>{value}</p>
    </div>
  );
};
