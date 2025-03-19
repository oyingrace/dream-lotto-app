// app/components/BetConfirmationModal.jsx
import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiCheck } from 'react-icons/fi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

const BetConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  const [pin, setPin] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [activeKey, setActiveKey] = useState(null);
  const router = useRouter();

  // Handle PIN input
  const handleKeyPress = (value) => {
    if (pin.length < 4) {
      setPin(prev => prev + value);
      setActiveKey(value);
      
      // Reset activeKey after a short delay to create a "press" effect
      setTimeout(() => {
        setActiveKey(null);
      }, 150);
    }
  };

  // Handle backspace
  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
    setActiveKey(null);
  };

  // Handle confirmation
  const handleConfirm = () => {
    if (pin.length === 4) {
      // Always show success for frontend demo
      setIsSuccess(true);
      setShowResult(true);
      
      // Redirect after showing success message
      setTimeout(() => {
        setShowResult(false);
        setPin('');
        onConfirm();
        router.push('/home');
      }, 2000);
    }
  };

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modalOverlay') {
      onClose();
    }
  };

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPin('');
      setShowResult(false);
    }
  }, [isOpen]);

  // Animation class for sliding up
  const modalClasses = `bg-white dark:bg-dark-bg-primary w-full rounded-t-2xl max-h-[500px] overflow-hidden flex flex-col transform transition-transform duration-300 ${
    isOpen ? 'translate-y-0' : 'translate-y-full'
  }`;

  if (!isOpen && !showResult) return null;

  return (
    <div 
      id="modalOverlay"
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOutsideClick}
    >
      <div className={modalClasses} style={{ height: '60vh' }}>
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-dark-bg-secondary">
          <h3 className="font-semibold text-lg dark:text-dark-text-primary">
            {showResult ? (isSuccess ? "Success" : "Failed") : "Confirm Bet"}
          </h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg-secondary"
          >
            <IoClose className="text-xl dark:text-dark-text-primary" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {showResult ? (
            <div className="h-full flex flex-col items-center justify-center">
              {isSuccess ? (
                <>
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
                    <FiCheck className="text-green-600 dark:text-green-400 text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-dark-text-primary">Bet Successfully Placed!</h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-center">
                    Your bet has been confirmed and is now active.
                  </p>
                </>
              ) : (
                <>
                  <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full mb-4">
                    <RiErrorWarningLine className="text-red-600 dark:text-red-400 text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-dark-text-primary">Transaction Failed</h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary text-center">
                    Please try again or contact support.
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-6 text-center">
                Enter your 4-digit PIN to confirm this bet
              </p>

              {/* PIN Input Display */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-3">
                  {[0, 1, 2, 3].map((index) => (
                    <div 
                      key={index}
                      className="w-12 h-12 border-2 rounded-lg flex items-center justify-center text-lg font-bold dark:border-dark-bg-secondary dark:text-dark-text-primary"
                    >
                      {pin.length > index ? '•' : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Numeric Keypad */}
              <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
             key={num}
             className={`h-14 rounded-lg font-semibold text-lg dark:text-dark-text-primary ${
              activeKey === num.toString()  // Convert num to string for comparison
             ? "bg-dream-blue text-white border-dream-blue dark:bg-dream-blue-dark"
              : "bg-gray-100 dark:bg-dark-bg-secondary"
             }`}
             onClick={() => handleKeyPress(num.toString())}
             >
           {num}
          </button>
          ))}
                <button
                  className="bg-gray-100 dark:bg-dark-bg-secondary h-14 rounded-lg font-semibold dark:text-dark-text-primary"
                  onClick={handleBackspace}
                >
                  ←
                </button>
                <button
                className={`bg-gray-100 dark:bg-dark-bg-secondary h-14 rounded-lg font-semibold text-lg dark:text-dark-text-primary ${
                activeKey === '0' ? "bg-dream-blue text-white border-dream-blue dark:bg-dream-blue-dark" : ""
                 }`}
                onClick={() => handleKeyPress('0')}
                 >
                 0
               </button>
                <button
                  className={`h-14 rounded-lg font-semibold text-lg text-white ${
                    pin.length === 4 
                      ? "bg-dream-yellow dark:bg-dream-yellow-subtlelight" 
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={handleConfirm}
                  disabled={pin.length !== 4}
                >
                  OK
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetConfirmationModal;