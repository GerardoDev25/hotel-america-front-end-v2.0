export const SkeletonLoadingPage = () => {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-8rem)] bg-backgroundLight dark:bg-dark-bg'>
      <div className='w-full max-w-4xl space-y-6'>
        {/* Header Skeleton */}
        <div className='h-8 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-2/3 mx-auto animate-pulse'></div>

        {/* Content Rows */}
        <div className='space-y-4'>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className='h-6 bg-backgroundLight-dark dark:bg-dark-bg-light rounded w-full animate-pulse'
            ></div>
          ))}
        </div>

        {/* Button Placeholder */}
        <div className='h-10 bg-accent dark:bg-dark-accent rounded w-1/4 mx-auto animate-pulse'></div>
      </div>
    </div>
  );
};
