export const GuestTableHead = () => {
  return (
    <thead className='bg-backgroundLight dark:bg-dark-bg'>
      <tr>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Id
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Register Id
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Name
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          DI
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Check-In
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Check-Out
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Room Number
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          Phone
        </th>
        <th className='px-4 py-2 text-left text-textDark dark:text-dark-text border border-gray-200 dark:border-dark-bg-light'>
          City
        </th>
      </tr>
    </thead>
  );
};
