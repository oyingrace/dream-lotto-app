"use client";
import React from 'react';
import Header from '../components/header';
import { Navigation } from '../components/navigation';
import { IoChevronForward } from 'react-icons/io5';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import ThemeSelector from '../components/ThemeSelector';

const ProfilePage = () => {

  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      {/* Header */}
      <Header />
  
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          {/* Profile Card */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-4">
                <Image
                  src="/images/profile-pic.jpg" // Replace with your actual image path
                  alt="Profile Picture"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold dark:text-dark-text-primary">Ahmed Ibrahim</h2>
                <p className="text-gray-600 dark:text-dark-text-secondary">@ahmed_ibrahim</p>
              </div>
            </div>
          </div>
  
          {/* Account Settings */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2 dark:text-dark-text-primary">Account Settings</h3>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-bg-primary">
              <span className="dark:text-dark-text-primary">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-dark-bg-primary rounded-full peer peer-checked:bg-dream-blue dark:peer-checked:bg-dream-blue-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-dark-bg-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="dark:text-dark-text-primary">SMS Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 dark:bg-dark-bg-primary rounded-full peer peer-checked:bg-dream-blue dark:peer-checked:bg-dream-blue-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-dark-bg-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
  
          {/* Security Settings */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 flex justify-between items-center mb-4">
            <span className="text-lg dark:text-dark-text-primary">Security Settings</span>
            <IoChevronForward className="text-gray-400 dark:text-dark-text-secondary" />
          </div>
  
          {/* Privacy Policy */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 flex justify-between items-center mb-4">
            <span className="text-lg dark:text-dark-text-primary">Privacy Policy</span>
            <IoChevronForward className="text-gray-400 dark:text-dark-text-secondary" />
          </div>
  
          {/* Terms of Service */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 flex justify-between items-center mb-4">
            <span className="text-lg dark:text-dark-text-primary">Terms of Service</span>
            <IoChevronForward className="text-gray-400 dark:text-dark-text-secondary" />
          </div>
  
          {/* Support & FAQs */}
          <div className="bg-white dark:bg-dark-bg-secondary rounded-lg p-4 flex justify-between items-center mb-4">
            <span className="text-lg dark:text-dark-text-primary">Support & FAQs</span>
            <IoChevronForward className="text-gray-400 dark:text-dark-text-secondary" />
          </div>

          <ThemeSelector />
  
          {/* Log Out */}
          <button 
           onClick={() => router.push('/')}
          className="w-full bg-white dark:bg-dark-bg-secondary text-red-500 font-medium py-4 rounded-lg mb-4">
            Log Out
          </button>
        </div>
      </div>
  
      {/* Navigation */}
      <div className="sticky bottom-0 w-full">
        <Navigation activePage="profile" />
      </div>
    </div>
  );
};

export default ProfilePage;