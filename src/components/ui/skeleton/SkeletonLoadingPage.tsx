export const SkeletonLoadingPage = () => {
  return (
    <div className='flex items-start pt-16 justify-center min-hight-custom bg-backgroundLight dark:bg-dark-bg cursor-wait'>
      <div className='w-full max-w-7xl space-y-6'>
        {/* Header Skeleton */}
        <div className='flex flex-col sm:flex-row justify-between w-full gap-4'>
          <div className='h-8 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-full sm:w-2/3 animate-pulse mx-0' />
          <div className='animate-pulse w-full sm:w-1/3 h-8 rounded bg-primary dark:bg-dark-complementary' />
        </div>

        {/* Content Rows */}
        <div className='w-full flex items-center gap-4 '>
          <div className='w-[45%] h-56 animate-pulse bg-backgroundLight-dark dark:bg-dark-bg-light' />
          <div className='space-y-4 w-[65%]'>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className='h-6 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-full animate-pulse'
              />
            ))}
          </div>
        </div>
        <div className='hidden sm:block h-6 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-full animate-pulse' />
        <div className='hidden sm:block h-6 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-full animate-pulse' />

        {/* Button Placeholder */}
        <div className='flex w-full gap-2'>
          <div className='h-10 bg-accent dark:bg-dark-accent rounded w-full sm:w-2/4 mx-auto animate-pulse'></div>
          <div className='h-10 bg-red-400 rounded hidden sm:block sm:w-2/4 mx-auto animate-pulse'></div>
        </div>
      </div>
    </div>
  );
};
