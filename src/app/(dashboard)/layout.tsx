interface Props {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className='min-h-screen bg-white'>
      <div className='mx-0 sm:mx-7 bg-backgroundLight'>{children}</div>
    </main>
  );
}
