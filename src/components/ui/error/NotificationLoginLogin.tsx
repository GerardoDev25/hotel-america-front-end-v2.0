import { capitalizeText } from '@/utils';
import React from 'react';

interface Props {
  name: string;
}
export const NotificationLogin = ({ name }: Props) => {
  return (
    <p>
      Welcome <span className='font-bold'>{capitalizeText(name)}</span>
    </p>
  );
};
