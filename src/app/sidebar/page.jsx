'use client'

import { useState } from 'react';
import Link from 'next/link';
import companyLogo from '../../../public/Logo.png';
import Image from 'next/image';
import { MdWindow,MdOutlineContactSupport,MdOutlinePeople } from "react-icons/md";
import { GoDeviceMobile } from "react-icons/go";
import { LuLayoutDashboard, LuNotepadText } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { FaCircleNodes } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-[15%] hidden lg:block h-full fixed top-0 left-0 h-screen bg-white text-gray-700 text-sm transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center ">
          <Image 
            src={companyLogo} 
            alt="Company Logo" 
            width='150'
            height='100' 
            className="" 
          />
        </div>
      </div>
      <nav className='w-full flex h-[60%] flex-grow'>
        <ul className="w-full">
          <li className=''>
            <Link href="/dashboard" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
              <MdWindow />
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/Devices" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
              <GoDeviceMobile />
              <span className="ml-2">Devices</span>
            </Link>
          </li>
          <li>
            <Link href="/services" className="flex items-center px-4 py-2  hover:bg-[#079455] hover:text-white">
              <LuLayoutDashboard />
              <span className="ml-2">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
              <LuNotepadText />
              <span className="ml-2">Applications</span>
            </Link>
          </li>
          <li>
            <Link href="/marketPlace" className="flex items-center px-4 py-2  px-4 py-2 hover:bg-[#079455] hover:text-white">
              <MdOutlinePeople />
              <span className="ml-2">Customers</span>
            </Link>
          </li>
          <li>
            <Link href="/marketPlace" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
              <CiShop />
              <span className="ml-2">Market Place</span>
            </Link>
          </li>
          <li>
            <Link href="/billing" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
              <LuNotepadText />
              <span className="ml-2">Billing</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
              <FaCircleNodes />
              <span className="ml-2">Refer a Friend</span>
            </Link>
          </li>
          {/* ... other menu items ... */}
        </ul>
      </nav>
      <div className="flex h-[40%] flex-col "> 
        <ul className="">
            <li>
                <Link href="/support" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
                    <MdOutlineContactSupport />
                    <span className="ml-2">Support</span>
                </Link>
            </li>
            <li>
                <Link href="/settings" className="flex items-center px-4 py-2 hover:bg-[#079455] hover:text-white">
                    <IoMdSettings />
                    <span className="ml-2">Settings</span>
                </Link>
            </li>
        </ul>

        <hr className=''></hr>
       
        <div className="flex items-center mt-4 ml-3">
          <FaUser />
          <div className="ml-3">
            <p className="text-sm">Kazuya</p>
            <p className="text-xs text-gray-400">kazuya12@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;