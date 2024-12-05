export const SkeletonFormPage: React.FC = () => {
  return (
    <div className='max-w-lg mx-auto bg-backgroundLight dark:bg-dark-bg-light p-6 rounded-lg shadow-lg space-y-4 animate-pulse mt-4 sm:mt-52'>
      {/* Header Placeholder */}
      <div className='h-6 bg-backgroundLight-dark dark:bg-dark-bg-light rounded'></div>

      {/* Input Fields Placeholders */}
      <div className='space-y-4'>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className='h-10 my-1 bg-backgroundLight-dark dark:bg-dark-bg rounded'
          ></div>
        ))}
      </div>
      <div className='flex w-full gap-2 h-10'>
        <div className='h-full bg-backgroundLight-dark dark:bg-dark-bg rounded w-2/3'></div>
        <div className='h-full bg-backgroundLight-dark dark:bg-dark-bg rounded w-1/3'></div>
      </div>
      <div className='flex w-full gap-2 h-10'>
        <div className='h-full bg-backgroundLight-dark dark:bg-dark-bg rounded w-1/2'></div>
        <div className='h-full bg-backgroundLight-dark dark:bg-dark-bg rounded w-1/2'></div>
      </div>

      {/* Button Placeholder */}
      <div className='h-12 bg-primary dark:bg-dark-primary rounded'></div>
    </div>
  );
};
