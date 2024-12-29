'use client'

import Sidebar from '../sidebar/page'; 
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import OwnedApplications from './ownedApplications';
import Customers from './customers';

function MarketPlace() {
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
            <div className="bg-gray-100 p-4 text-sm">
                <ul className="flex">
                    <li className="mr-4">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Owned Applications' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Owned Applications')}
                    >
                        Owned Applications
                    </a>
                    </li>
                    <li className="mr-4">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Market Place' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Market Place')}
                    >
                        Market Place
                    </a>
                    </li>
                    <li className="mr-4">
                    <a 
                        href="#" 
                        className={`text-gray-600 ${activeTab === 'Customers' && 'text-[#12a663] font-bold underline'}`} 
                        onClick={() => handleTabClick('Customers')}
                    >
                        Customers
                    </a>
                    </li>
                </ul>
            </div>

            {activeTab === 'Owned Applications' && <OwnedApplications />}
            {activeTab === 'Customers' && <Customers />}
            {activeTab === 'Market Place' && <OwnedApplications />}


        </div>
    </div>
  );
}

export default MarketPlace;