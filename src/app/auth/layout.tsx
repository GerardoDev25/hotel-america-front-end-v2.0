import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Login',
};

export default async function AuthLayout({ children }: Props) {
  return <div className='fade-in'>{children}</div>;
}
