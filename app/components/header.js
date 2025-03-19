"use client";

// Import these at the top of your file
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaWallet, FaHeadset } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { useRouter } from "next/navigation"; 

// In your component
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const hasUnreadNotifications = true; 
  
  
  const isWalletPage = pathname === '/wallet';
  const isResultsPage = pathname === '/results';
  const isProfilePage = pathname === "/profile";
  const isNotificationsPage = pathname === "/notifications";
  const isLeaderboardPage = pathname === "/leaderboard";

  const openLiveChat = () => {
    // Implement live chat functionality here
    // This could be opening a chat modal or redirecting to a support page
    router.push('/support');
    // Or if using a chat widget:
    // window.openChatWidget();
  };


  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-dark-bg-primary transition-colors duration-200">
      <div className="flex items-center">
        <Image 
          src="/images/dream-lotto-logo.png" 
          alt="Dream Lotto" 
          width={50} 
          height={40} 
        />
      </div>
      <div className="flex items-center gap-4">
        {/* Wallet Balance - only show when NOT on wallet page and some other pages */}
        {!isWalletPage && !isResultsPage && !isProfilePage && !isLeaderboardPage &&(
          <div className="flex items-center bg-gray-200 dark:bg-dark-bg-secondary rounded-full px-3 py-2 transition-colors">
            <FaWallet size={18} className="text-dream-yellow dark:text-dream-yellow-subtlelight" />
            <span className="ml-2 text-black dark:text-dark-text-primary font-semibold">₦2,500.00</span>
          </div>
        )}


        {/* Live Support */}
        <button
          /* onClick={openLiveChat} */
          className="relative text-dream-blue dark:text-dream-blue-light hover:opacity-80 transition-colors"
          aria-label="Live Support"
        >
          <FaHeadset size={24} />
        </button>

        {/* Notifications */}

        {!isNotificationsPage &&(
        <button
          onClick={() => router.push('/notifications')}
          className="relative"
        >
          <FiBell size={24} className="text-gray-700 dark:text-dark-text-secondary hover:opacity-80 transition-colors" />
          {hasUnreadNotifications && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </button>
        )}
      </div>
    </header>
  );
};

export default Header;