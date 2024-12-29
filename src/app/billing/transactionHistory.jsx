import React, { useState } from 'react';

const transactionData = [
  {
    date: '10-24-2024',
    duration: '1h 45m',
    energy: 11.2,
    costs: { solar: 0, electricity: 5.5 },
    salesPrice: 7.00,
    billingType: 'Private',
    billingAccount: 'Link Billing Account',
    status: 'Open',
  },
  {
    date: '10-23-2024',
    duration: '2h 20m',
    energy: 15.8,
    costs: { electricity: 12.6 },
    salesPrice: 14.00,
    billingType: 'Business',
    billingAccount: 'ABC Inc.',
    status: 'Billed',
  },
  {
    date: '10-22-2024',
    duration: '1h 10m',
    energy: 8.5,
    costs: { solar: 0 },
    salesPrice: 0.00,
    billingType: 'Private',
    billingAccount: 'John Doe',
    status: 'Paid',
  },
  {
    date: '10-21-2024',
    duration: '2h 00m',
    energy: 10.5,
    costs: { electricity: 8.75 },
    salesPrice: 10.00,
    billingType: 'Private',
    billingAccount: 'Link Billing Account',
    status: 'Open',
  },
  {
    date: '10-20-2024',
    duration: '2h 30m',
    energy: 18.3,
    costs: { electricity: 14.5 },
    salesPrice: 16.50,
    billingType: 'Private',
    billingAccount: 'John Doe',
    status: 'Billed',
  },
  {
    date: '10-20-2024',
    duration: '2h 30m',
    energy: 18.3,
    costs: { electricity: 14.5 },
    salesPrice: 16.50,
    billingType: 'Private',
    billingAccount: 'John Doe',
    status: 'Paid',
  },
];

const TransactionHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactionData.filter((transaction) => {
    const searchQuery = searchTerm.toLowerCase();
    return (
      transaction.date.toLowerCase().includes(searchQuery) ||
      transaction.billingAccount.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className="bg-white p-6 m-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <p className="text-sm mb-4">Access all your previous transactions.</p>

      <div className="flex text-xs gap-2 items-center my-4">
        <input
          type="text"
          placeholder="Search"
          className="border w-[80%] border-gray-400 rounded-md px-3 py-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <button className="border border-gray-400 bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-md">Status</button>
         <button className="border border-gray-400 bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-md">Billing Type</button>
      </div>

      <div className='overflow-x-auto'>
      <table className="w-full text-xs border-collapse ">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2 px-6">Date</th>
            <th className="border border-gray-200 p-2 px-6">Duration</th>
            <th className="border border-gray-200 p-2 px-6">Energy (kWh)</th>
            <th className="border border-gray-200 p-2 px-6">Costs for Charging</th>
            <th className="border border-gray-200 p-2 px-6">Sales Price</th>
            <th className="border border-gray-200 p-2 px-6">Billing Type</th>
            <th className="border border-gray-200 p-2 px-6">Billing Account</th>
            <th className="border border-gray-200 p-2 px-6">Status</th>
            <th className="border border-gray-200 p-2 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.date}>
              <td className="border border-gray-200 p-2">{transaction.date}</td>
              <td className="border border-gray-200 p-2">{transaction.duration}</td>
              <td className="border border-gray-200 p-2">{transaction.energy}</td>
              <td className="border border-gray-200 p-2">
                {transaction.costs.solar > 0 && `Solar: €${transaction.costs.solar}, `}
                {transaction.costs.electricity > 0 && `Electricity: €${transaction.costs.electricity}`}
              </td>
              <td className="border border-gray-200 p-2">€{transaction.salesPrice}</td>
              <td className="border border-gray-200 p-2">{transaction.billingType}</td>
              <td className="border border-gray-200 p-2">{transaction.billingAccount}</td>
              <td className="border border-gray-200 p-2">
                {transaction.status === 'Open' && (
                  <span className="inline-block bg-blue-100 rounded-full px-2 py-1 text-blue-500 text-xs font-semibold">
                    Open
                  </span>
                )}
                {transaction.status === 'Billed' && (
                  <span className="inline-block bg-yellow-100 rounded-full px-2 py-1 text-yellow-500 text-xs font-semibold">
                    Billed
                  </span>
                )}
                {transaction.status === 'Paid' && (
                  <span className="inline-block bg-green-100 rounded-full px-2 py-1 text-green-500 text-xs font-semibold">
                    Paid
                  </span>
                )}
              </td>
              <td className="border border-gray-200 p-2">
                <button className="text-gray-500 hover:text-gray-700">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default TransactionHistory;