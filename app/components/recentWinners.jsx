// components/RecentWinners.jsx
"use client";
import { useEffect, useState, useRef } from 'react';

// Mock data for recent winners
export const recentWinnersData = [
  { id: 1, name: 'Gbenga O.', amount: 70000, game: 'Premier 2-sure', timeAgo: '2 min ago' },
  { id: 2, name: 'Amaka T.', amount: 800000, game: 'Nap3', timeAgo: '5 min ago' },
  { id: 3, name: 'Chijioke M.', amount: 25000, game: 'Premier 2-sure', timeAgo: '7 min ago' },
  { id: 4, name: 'Funke A.', amount: 120000, game: 'Nap3', timeAgo: '12 min ago' },
  { id: 5, name: 'Emeka K.', amount: 50000, game: 'Premier 2-sure', timeAgo: '15 min ago' },
  { id: 6, name: 'Blessing U.', amount: 300000, game: 'Nap3', timeAgo: '20 min ago' },
  { id: 7, name: 'Tunde B.', amount: 150000, game: 'Premier 2-sure', timeAgo: '25 min ago' },
  { id: 8, name: 'Zainab H.', amount: 220000, game: 'Nap3', timeAgo: '30 min ago' },
];

const RecentWinners = () => {
  const [winnersList, setWinnersList] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Format currency with Naira symbol
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('NGN', '₦');
  };

  useEffect(() => {
    // Create a rotating array of winners that will continuously scroll
    const extendedWinners = [...recentWinnersData, ...recentWinnersData].map((winner, index) => ({
      ...winner,
      key: `${winner.id}-${index}` // Ensure each item has a unique key
    }));
    
    setWinnersList(extendedWinners);

    let startTime;
    let animationSpeed = 0.08; // pixels per millisecond

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      if (!containerRef.current) return;
      
      const elapsed = timestamp - startTime;
      const container = containerRef.current;
      const scrollAmount = elapsed * animationSpeed;
      
      // Scroll the container
      container.scrollTop = scrollAmount;
      
      // Reset scroll position and timestamps when we've scrolled through the first set of winners
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0;
        startTime = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-6">
      {/* <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Recent Winners</h3>
      </div> */}
      
      <div className="bg-yellow-50 dark:bg-dark-bg-secondary border border-yellow-100 dark:border-dark-bg-primary rounded-lg p-4 transition-colors duration-200">
       {/*  <div className="flex items-center mb-3">
          <div className="bg-yellow-500 rounded-full p-1 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2v6.5l2.5-2.5 2.5 2.5V2"></path>
              <path d="M4.7 10.4l1.1-.7 1.1.7-.4-1.3 1.1-.8h-1.4L5.8 7l-.4 1.3H4l1.1.8-.4 1.3z"></path>
              <path d="M19.3 10.4l1.1-.7 1.1.7-.4-1.3 1.1-.8h-1.4L20.3 7l-.4 1.3h-1.4l1.1.8-.4 1.3z"></path>
              <path d="M18 14v8H6v-8"></path>
              <path d="M22 9H2"></path>
            </svg>
          </div>
          <span className="font-semibold">Live Winners Feed</span>
        </div> */}
        
        <div 
          ref={containerRef}
          className="h-40 overflow-hidden" 
          style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
        >
          <div className="pb-4">
            {winnersList.map((winner) => (
              <div 
                key={winner.key}
                className="mb-3 p-3 border rounded-lg bg-white dark:bg-dark-bg-primary border-gray-100 dark:border-dark-bg-secondary shadow-sm dark:shadow-none transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-dark-bg-secondary text-gray-700 dark:text-dark-text-primary rounded-full flex items-center justify-center transition-colors duration-200">
                    {winner.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-sm text-gray-800 dark:text-dark-text-primary">{winner.name}</p>
                      <p className="text-xs text-gray-500 dark:text-dark-text-secondary">{winner.timeAgo}</p>
                    </div>
                    <p className="text-sm mt-1 text-gray-700 dark:text-dark-text-secondary">
                      Won <span className="font-bold text-green-600 dark:text-green-400">{formatAmount(winner.amount)}</span> on {winner.game}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWinners;