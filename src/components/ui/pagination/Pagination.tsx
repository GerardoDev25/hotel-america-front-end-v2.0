interface Props {
  totalPages: number;
}

export const Pagination: React.FC<Props> = ({ totalPages }) => {
  console.log({ totalPages });
  return <div className='ml-auto mr-auto w-32 bg-red-600 my-8'>Pagination</div>;
};
