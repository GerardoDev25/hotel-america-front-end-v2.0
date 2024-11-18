const thDefaultStyle =
  'px-4 py-4 border border-gray-200 dark:border-dark-bg-light';

export const GuestTableHead = () => {
  return (
    <thead className='text-left bg-backgroundLight-dark dark:bg-dark-accent text-textDark capitalize'>
      <tr>
        <th className={`${thDefaultStyle}`}>id</th>
        <th className={`${thDefaultStyle}`}>register id</th>
        <th className={`${thDefaultStyle}`}>name</th>
        <th className={`${thDefaultStyle}`}>di</th>
        <th className={`${thDefaultStyle}`}>check-in</th>
        <th className={`${thDefaultStyle}`}>check-out</th>
        <th className={`${thDefaultStyle}`}>room number</th>
        <th className={`${thDefaultStyle}`}>phone</th>
        <th className={`${thDefaultStyle}`}>city</th>
      </tr>
    </thead>
  );
};
