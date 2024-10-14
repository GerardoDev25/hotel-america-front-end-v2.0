interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  return <div>{children}</div>;
}
