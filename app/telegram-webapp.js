// File: app/telegram-webapp.js
'use client';
import { useEffect } from 'react';

export function useTelegramWebApp() {
  useEffect(() => {
    // Helper function to initialize Telegram WebApp
    const initTelegramWebApp = () => {
      if (window.Telegram && window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        
        // Set viewport settings for better rendering in Telegram
        webApp.setViewportSettings({
          expand: true,
          is_expanded: true
        });
        // Enable closing confirmation if needed
        webApp.enableClosingConfirmation();

        // Initialize MainButton (if needed)
        const mainButton = webApp.MainButton;
        if (mainButton) {
          mainButton.setText('PLAY NOW');
          mainButton.setParams({
            color: '#FACC15',
            text_color: '#FFFFFF',
            is_active: true,
            is_visible: false
          });
        }

        // Set up the theme
        const theme = window.Telegram.WebApp.themeParams;
        if (theme) {
          // Apply Telegram theme colors to our app
          document.documentElement.style.setProperty('--tg-theme-bg-color', theme.bg_color);
          document.documentElement.style.setProperty('--tg-theme-text-color', theme.text_color);
          document.documentElement.style.setProperty('--tg-theme-hint-color', theme.hint_color);
          document.documentElement.style.setProperty('--tg-theme-link-color', theme.link_color);
          document.documentElement.style.setProperty('--tg-theme-button-color', theme.button_color);
          document.documentElement.style.setProperty('--tg-theme-button-text-color', theme.button_text_color);
        }

        // Return user data if available
        return webApp.initDataUnsafe?.user;
      }
      return null;
    };

    const telegramUser = initTelegramWebApp();
    
    // If you need to do something with the user data
    if (telegramUser) {
      console.log('Telegram user:', telegramUser);
      // You could store this in context or state
    }

    // Cleanup function
    return () => {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.MainButton.hide();
      }
    };
  }, []);
}