import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import { Navigation } from '../components/navigation';
import { FaDownload } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';
import RecentTransactions from '../components/recentTransactions';


const WalletPage = () => {
  // Sample transaction data
  const transactions = [
    {
      type: 'Deposit',
      date: 'Feb 18, 2025',
      amount: '500.00',
      isPositive: true
    },
    {
      type: 'Lottery Ticket Purchase',
      date: 'Feb 17, 2025',
      amount: '200.00',
      isPositive: false
    },
    {
      type: 'Winning Payout',
      date: 'Feb 16, 2025',
      amount: '1000.00',
      isPositive: true
    },
    {
      type: 'Withdrawal',
      date: 'Feb 15, 2025',
      amount: '8000.00',
      isPositive: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm mb-1">Available Balance</p>
            <h2 className="text-3xl font-bold mb-4">₦2500.00</h2>

            <div className="flex gap-4">
              <button className="flex items-center justify-center gap-2 flex-1 bg-yellow-500 text-white rounded-lg py-3 px-4">
                <FaDownload className="text-white" />
                <span>Deposit Funds</span>
              </button>
              <button className="flex items-center justify-center gap-2 flex-1 bg-yellow-500 text-white rounded-lg py-3 px-4">
                <IoArrowForward className="text-white" />
                <span>Withdraw</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="px-4 pb-4">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <RecentTransactions transactions={transactions} />

          <Link href="/transactions">
          <button className="w-full bg-yellow-500 text-black font-medium py-4 rounded-lg mt-2">
           View All Transactions
          </button>
          </Link>

        </div>
      </div>

      <div className="sticky bottom-0 w-full">
        <Navigation activePage="wallet" />
      </div>
    </div>
  );
};

export default WalletPage;