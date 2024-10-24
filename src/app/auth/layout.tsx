import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Login - Hotel | America',
  description: 'Administration hotel system',
};

export default async function AuthLayout({ children }: Props) {
  return <div className='fade-in'>{children}</div>;
}
