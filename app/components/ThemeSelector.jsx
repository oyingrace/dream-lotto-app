import { useState } from 'react';
import { useTheme } from 'next-themes';
import { IoChevronForward, IoSunny, IoMoon } from 'react-icons/io5';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);
  
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      {/* Theme Selection Button */}
      <div 
        className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 flex justify-between items-center mb-4 cursor-pointer"
        onClick={toggleOptions}
      >
        <div className="flex items-center">
          <span className="text-lg dark:text-dark-text-primary mr-2">Theme</span>
          <span className="text-sm text-gray-500 dark:text-dark-text-secondary">
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>
        <IoChevronForward className={`text-gray-400 dark:text-dark-text-secondary transition-transform ${showOptions ? 'transform rotate-90' : ''}`} />
      </div>
      
      {/* Theme Options Dropdown */}
      {showOptions && (
        <div className="absolute w-full z-10 mt-1 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg overflow-hidden">
          <div 
            className={`p-4 flex items-center ${theme === 'light' ? 'bg-gray-100 dark:bg-dark-bg-primary' : ''} cursor-pointer`}
            onClick={() => selectTheme('light')}
          >
            <IoSunny className="text-dream-yellow-dark mr-3" size={20} />
            <span className="dark:text-dark-text-primary">Light Mode</span>
            {theme === 'light' && (
              <div className="ml-auto w-4 h-4 bg-dream-blue rounded-full"></div>
            )}
          </div>
          
          <div 
            className={`p-4 flex items-center ${theme === 'dark' ? 'bg-gray-100 dark:bg-dark-bg-primary' : ''} cursor-pointer`}
            onClick={() => selectTheme('dark')}
          >
            <IoMoon className="text-gray-600 dark:text-dark-text-secondary mr-3" size={20} />
            <span className="dark:text-dark-text-primary">Dark Mode</span>
            {theme === 'dark' && (
              <div className="ml-auto w-4 h-4 bg-dream-blue rounded-full"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}