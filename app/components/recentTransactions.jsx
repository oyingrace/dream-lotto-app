// components/RecentTransactions.jsx
import React from 'react';

// Transaction Item Component
const TransactionItem = ({ type, date, amount, isPositive }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg mb-4">
      <div>
        <h3 className="font-medium text-lg">{type}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '+' : '-'}₦{amount}
      </span>
    </div>
  );
};

// Recent Transactions Component
const RecentTransactions = ({ transactions }) => {
  return (
    <div className="mt-6">
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          type={transaction.type}
          date={transaction.date}
          amount={transaction.amount}
          isPositive={transaction.isPositive}
        />
      ))}

    </div>
  );
};

export default RecentTransactions;
