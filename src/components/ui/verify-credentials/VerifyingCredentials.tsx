export const VerifyingCredentials = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-backgroundLight dark:bg-dark-bg'>
      <div className='text-center'>
        <div className='flex justify-center mb-4'>
          {/* Spinner */}
          <div className='w-16 h-16 border-4 border-t-4 border-accent dark:border-dark-accent border-t-transparent rounded-full animate-spin'></div>
        </div>
        {/* Verifying Message */}
        <p className='text-xl font-semibold text-textDark dark:text-dark-text'>
          Verifying Credential...
        </p>
      </div>
    </div>
  );
};
