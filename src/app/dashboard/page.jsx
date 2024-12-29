'use client'

import Sidebar from '../sidebar/page'; 
import Image from 'next/image'; 
import { FaBell } from "react-icons/fa";
import giftBox from '../../../public/GiftBox.png'


function LandingPage() {

    const applications = [
        {
          name: "Application 1",
          category: "Finance",
          price: "Free",
          description: "Streamline software projects, sprints, and bug tracking.",
          src: "InstalledImage1.png"
        },
        {
          name: "Application 2",
          category: "Finance",
          price: "Free",
          description: "Streamline software projects, sprints, and bug tracking.",
          src: "InstalledImage2.png"
        },
        {
          name: "Application 3",
          category: "Finance",
          price: "Paid",
          description: "Streamline software projects, sprints, and bug tracking.",
          src: "InstalledImage3.png"
        },
      ];

      const transactions = [
        {
          name: "Figma",
          date: "12/06/24",
          amount: "-$15.00",
          icon: "figma.png", 
        },
        {
          name: "Transaction 1",
          date: "12/06/24",
          amount: "+$88.00",
          icon: "figma.png", 
        },
        {
          name: "Transaction 2",
          date: "12/06/24",
          amount: "+$88.00",
          icon: "figma.png", 
        },
        {
          name: "Transaction 3",
          date: "12/06/24",
          amount: "-$15.00",
          icon: "figma.png", 
        },
        {
          name: "Lorem Ipsum",
          date: "12/06/24",
          amount: "+$88.00",
          icon: "figma.png", 
        },
      ];

      const devices = [
        {
          name: "My Energymanager",
          details: "Extensible Service Device",
          ipAddress: "203.230.199.12",
          status: "Active",
          icon: "ActiveDevice1.png",
        },
        {
            name: "My Energymanager",
            details: "Extensible Service Device",
            ipAddress: "203.230.199.12",
            status: "Active",
            icon: "ActiveDevice2.png",
        },
        {
            name: "My Energymanager",
            details: "Extensible Service Device",
            ipAddress: "203.230.199.12",
            status: "Active",
            icon: "ActiveDevice3.png",
        },
        {
            name: "My Energymanager",
            details: "Extensible Service Device",
            ipAddress: "203.230.199.12",
            status: "Active",
            icon: "ActiveDevice4.png",
        },
      ];
    

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

        {/* Welcome Kazunya */}
        <div className='flex gap-12 m-4 p-6 bg-[#DDEEE7] rounded-lg'>

            <div className='flex flex-col order-1'>
                <h2 className="text-2xl font-bold mb-2">Welcome, Kazuya!</h2>
                <p className="text-gray-600">
                    Invite a friend to receive an immediate bonus in your account for every successful referral.
                </p>
                <div className="flex items-center w-full mt-4">
                    <input type="text" value="https://refer-e-economy.io/XDMncDjkL" className="w-full border border-gray-300  px-4 py-2 " readOnly />
                    <button className="bg-[#079455] hover:bg-[#079420] text-white px-4 py-2 ">Copy</button>
                </div>
            </div>
            
            <div className="hidden lg:block mt-4 mx-4 order-2 ">
                <Image 
                src={giftBox}
                alt="Gift Box"
                width={150} 
                height={150} 
                className="rounded-lg" 
                /> 
            </div>

        </div>

        {/* Market Place */}
        <div className="flex m-4 md:m-0">
            <div className=" flex flex-col md:flex-row gap-2 ">
                <div className="bg-white rounded-lg m-0 md:m-4 p-6 order-1 w-full md:w-2/3 "> 
                <h2 className="text-lg font-semibold mb-4">Market Place</h2>
                <img src="LineBarChart.png" alt="Market Place Chart" className="w-full" />
                </div>
                <div className=" text-md order-2 w-full md:w-1/3"> 
                    <div className="bg-white rounded-lg my-4 p-6 mb-4"> 
                        <p className="text-gray-600">Total Downloads</p>
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">1,150</h3>
                            <span className="text-green-500">+10%</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg my-4 p-6 mb-4">
                        <p className="text-gray-600">Average Rating</p>
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">4.8</h3>
                            <span className="text-red-500">-12%</span>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg my-4 p-6'> 
                        <p className="text-gray-600">Average Cash Flow</p>
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">$3,500</h3>
                            <span className="text-green-500">+10%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        {/* Installed Applications */}
        <div className="bg-white m-4 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Installed Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
                {applications.map((app, index) => (
                <div key={index} className="bg-white border border-gray-250 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                    <img src={app.src} alt="Market Place Chart" className="w-[20] mr-2 " />
                        <span className="text-md font-semibold">{app.name}</span>
                    </div>
                    <span className={`text-xs font-semibold rounded-md px-2 py-1 ${app.price === 'Free' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {app.price}
                    </span>
                    </div>
                    <span className="text-xs text-gray-500">{app.category}</span>
                    <p className="text-xs mt-2">{app.description}</p>
                    <button className="text-xs text-[#17B26A] hover:underline">View Application <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 12l7 7 7-7"></path></svg></button> 
                </div>
                ))}
            </div>
        </div>

        {/* Active Devices */}
        <div className="flex flex-col lg:flex-row gap-4 m-4">
            <div className="w-full lg:w-2/3 bg-white text-xs p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Active Devices</h3>
                <table className="w-full border-collapse">
                <thead>
                    <tr>
                    <th className="text-left border-b pb-2">Device Name</th>
                    <th className="hidden md:block text-left border-b pb-2">Details</th>
                    <th className="text-left border-b pb-2">IP Address</th>
                    <th className="text-left border-b pb-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device, index) => (
                    <tr key={index}>
                        <td className="py-2 border-b">
                        <div className="flex items-center">
                            <img src={device.icon} alt={device.name} className="w-6 h-6 mr-2" /> 
                            <span>{device.name}</span>
                        </div>
                        </td>
                        <td className="hidden md:block py-2 border-b">{device.details}</td>
                        <td className="py-2 border-b">{device.ipAddress}</td>
                        <td className="py-2 border-b">
                        <span className={`px-2 py-1 rounded-md ${device.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {device.status}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <div className="w-full lg:w-1/3 bg-white p-4 text-xs rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <div>
                {transactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <img src={transaction.icon} alt={transaction.name} className="w-6 h-6 mr-2" /> 
                        <span>{transaction.name}</span>
                    </div>
                    <span className={`text-${transaction.amount.startsWith('-') ? 'red-500' : 'green-500'}`}>
                        {transaction.amount}
                    </span>
                    </div>
                ))}
                </div>
            </div>
        </div>

    </div>

    </div>
  );
}

export default LandingPage;