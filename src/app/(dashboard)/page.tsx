export default function DashboardPage() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {/* Light Mode Colors */}
        <div className='w-24 h-24 bg-primary'>primary</div>
        <div className='w-24 h-24 bg-accent'>accent</div>
        <div className='w-24 h-24 bg-backgroundLight'>backgroundLight</div>
        <div className='w-24 h-24 bg-textDark'>textDark</div>
        <div className='w-24 h-24 bg-complementary'>complementary</div>

        {/* Dark Mode Colors */}
        <div className='w-24 h-24 bg-dark-primary'>dark-primary</div>
        <div className='w-24 h-24 bg-dark-accent'>dark-accent</div>
        <div className='w-24 h-24 bg-dark-bg'>dark-bg</div>
        <div className='w-24 h-24 bg-dark-text'>dark-text</div>
        <div className='w-24 h-24 bg-dark-complementary'>
          dark-complementary
        </div>
      </div>
    </div>
  );
}
