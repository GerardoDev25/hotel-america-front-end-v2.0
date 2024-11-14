export const RoomItemSkeleton: React.FC = () => {
  return (
    <div className='flex justify-around items-center p-4 rounded-lg shadow-2xl bg-backgroundLight dark:bg-dark-bg border-l-4 border-accent animate-pulse'>
      {/* Skeleton for the room number and type */}
      <div className='w-1/2 text-center'>
        <div className='h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto mb-2'></div>
        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto'></div>
      </div>

      {/* Skeleton for room details */}
      <div className='w-1/2 space-y-4'>
        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4'></div>
        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2'></div>
        <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3'></div>
      </div>
    </div>
  );
};
