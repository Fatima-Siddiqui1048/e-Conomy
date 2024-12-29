'use client'

import Sidebar from '../sidebar/page'; 
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import PricingPlans from './pricingPlan';
import TransactionHistory from './transactionHistory';
import BillingAccountForm from './billingDetails';
import BankAndCards from './banksAndCards';
import ThirdPartyBillingSetup from './billingSetup';

function Billing() {
    const [activeTab, setActiveTab] = useState('Owned Applications');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


  return (
    <div className="flex h-full bg-gray-100 w-full"> 
        <Sidebar className='order-1'/> 
        <div className="w-full lg:ml-[15%] order-2 "> 
        
        {/* Search Bar and Language Part */}
        <div className="p-4 text-xs bg-white flex justify-between items-center mb-4">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md p-2 w-full md:w-1/4" /> 
            <div className="flex items-center">
            <FaBell className='mx-4 w-[30] h-[25] border border-gray-300 rounded-full p-1' />
            <select className="bg-white border border-gray-300 rounded-md  p-2 ">
                <option value="en">English</option>
                <option value="es">Español</option> 
                {/* Add more language options */}
            </select>
            </div>
        </div>

            {/* Navigation bar */}
            <div className="w-full bg-gray-100 p-4 text-sm">
                <ul className="grid grid-cols-3 md:flex gap-4 "> 
                    <li className="mb-4 sm:mb-0">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'My Subscription' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('My Subscription')}
                    >
                        My Subscription
                    </a>
                    </li>
                    <li className="mb-4 sm:mb-0">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Plan' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Plan')}
                    >
                        Plan
                    </a>
                    </li>
                    <li className="mb-4 sm:mb-0">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Transactions' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Transactions')}
                    >
                        Transactions
                    </a>
                    </li>
                    <li className="mb-4 sm:mb-0">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Billing' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Billing')}
                    >
                        Billing
                    </a>
                    </li>
                    <li className="mb-4 sm:mb-0">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Bank and Cards' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Bank and Cards')}
                    >
                        Bank & Cards
                    </a>
                    </li>
                </ul>
            </div>

            {activeTab === 'My Subscription' && <ThirdPartyBillingSetup />}
            {activeTab === 'Plan' && <PricingPlans />}
            {activeTab === 'Transactions' && <TransactionHistory />}
            {activeTab === 'Billing' && <BillingAccountForm />}
            {activeTab === 'Bank and Cards' && <BankAndCards />}
           

        </div>
    </div>
  );
}

export default Billing;