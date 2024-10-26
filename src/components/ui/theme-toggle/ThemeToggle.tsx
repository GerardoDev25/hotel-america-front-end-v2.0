'use client';
import clsx from 'clsx';
import { useSideMenuStore, useThemeColor } from '@/store/ui';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const isDarkMode = useThemeColor((s) => s.isDarkMode);
  const setThemeColor = useThemeColor((s) => s.setThemeColor);
  const closeSideMenu = useSideMenuStore((s) => s.closeSideMenu);

  const toggleTheme = () => {
    setThemeColor(!isDarkMode);
    closeSideMenu();
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'p-3 rounded-full focus:outline-none hover:bg-primary group color-transition',
        { 'bg-complementary': isDarkMode }
      )}
      aria-label='Toggle Dark Mode'
      title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
    >
      {isDarkMode ? (
        <FiSun className='text-textDark group-hover:text-white' size={24} />
      ) : (
        <FiMoon className='text-gray-800' size={24} />
      )}
    </button>
  );
};
