// File: app/notifications/page.jsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowBack, IoCashOutline, IoTicketOutline, IoGiftOutline, IoMegaphoneOutline, IoTimeOutline } from "react-icons/io5";
import Header from "../components/header";
import { Navigation } from '../components/navigation';

export default function NotificationsPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data - in a real app, you would fetch this from an API
    const mockNotifications = [
      {
        id: 1,
        type: 'win',
        title: 'Congratulations! You won ₦500.00',
        message: 'Your ticket matched 3 numbers in the daily draw.',
        date: '2025-03-17T15:30:00',
        isRead: false,
        icon: 'cash'
      },
      {
        id: 2,
        type: 'promo',
        title: 'Special Weekend Offer',
        message: 'Buy 2 tickets, get 1 free this weekend only!',
        date: '2025-03-15T09:00:00',
        isRead: true,
        icon: 'gift'
      },
      {
        id: 3,
        type: 'draw',
        title: 'Weekly Draw Results',
        message: 'The winning numbers for this week are 7, 15, 23, 31, 42, 56.',
        date: '2025-03-14T20:00:00',
        isRead: true,
        icon: 'ticket'
      },
      {
        id: 4,
        type: 'referral',
        title: 'Referral Bonus Received',
        message: 'You earned ₦700.00 from John\'s first purchase.',
        date: '2025-03-13T14:45:00',
        isRead: false,
        icon: 'cash'
      },
      {
        id: 5,
        type: 'system',
        title: 'System Maintenance',
        message: 'Dream Lotto will be down for maintenance on March 20 from 2-4 AM.',
        date: '2025-03-12T11:20:00',
        isRead: true,
        icon: 'time'
      },
      {
        id: 6,
        type: 'jackpot',
        title: 'Mega Jackpot Alert',
        message: 'This week\'s jackpot has reached ₦10 million! Don\'t miss your chance.',
        date: '2025-03-10T08:30:00',
        isRead: false,
        icon: 'megaphone'
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setNotifications(mockNotifications);
      setIsLoading(false);
    }, 500);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? {...notification, isRead: true} 
          : notification
      )
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffDays > 6) {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } else if (diffDays >= 1) {
      return `${diffDays}d ago`;
    } else if (diffHours >= 1) {
      return `${diffHours}h ago`;
    } else {
      return `${diffMinutes}m ago`;
    }
  };

  const getIconComponent = (iconType) => {
    switch(iconType) {
      case 'cash':
        return <IoCashOutline size={24} className="text-green-500" />;
      case 'gift':
        return <IoGiftOutline size={24} className="text-purple-500" />;
      case 'ticket':
        return <IoTicketOutline size={24} className="text-dream-blue" />;
      case 'megaphone':
        return <IoMegaphoneOutline size={24} className="text-dream-yellow-dark" />;
      case 'time':
        return <IoTimeOutline size={24} className="text-gray-500" />;
      default:
        return <IoMegaphoneOutline size={24} className="text-dream-blue" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pb-20">
        <div className="flex items-center justify-center relative px-4 py-6">
          <button 
            onClick={() => router.push('/home')} 
            className="absolute left-4 p-2 text-gray-700 hover:text-dream-blue transition"
            aria-label="Go back to home"
          >
            <IoArrowBack size={24} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-dream-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <IoMegaphoneOutline size={32} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No Notifications</h2>
            <p className="text-gray-500 max-w-xs mx-auto">You don't have any notifications yet. Check back later!</p>
          </div>
        ) : (
          <div className="px-4 space-y-2">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-4 rounded-lg bg-white shadow flex items-start ${!notification.isRead ? 'border-l-4 border-dream-blue' : ''}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex-shrink-0 mr-3">
                  {getIconComponent(notification.icon)}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-semibold ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-500 ml-2">
                      {formatDate(notification.date)}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${!notification.isRead ? 'text-gray-800' : 'text-gray-600'}`}>
                    {notification.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <div className="fixed bottom-0 left-0 right-0">
        <Navigation />
      </div>
    </div>
  );
}