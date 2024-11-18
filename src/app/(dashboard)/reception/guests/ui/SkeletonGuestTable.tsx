export const SkeletonGuestTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto border-collapse border border-gray-200 dark:border-dark-bg-light'>
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
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr
              key={index}
              className='even:bg-backgroundLight-green odd:bg-backgroundLight dark:even:bg-dark-bg-light dark:odd:bg-dark-bg'
            >
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-3/4 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-3/4 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-3/4 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-1/2 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-3/4 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-3/4 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-1/4 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-1/2 animate-pulse'></div>
              </td>
              <td className='px-4 py-2 border border-gray-200 dark:border-dark-bg-light'>
                <div className='h-4 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-3/4 animate-pulse'></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonGuestTable;
