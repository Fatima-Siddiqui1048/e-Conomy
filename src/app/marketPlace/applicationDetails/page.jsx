'use client'

import Sidebar from '../../sidebar/page'; 
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import AdditionalInfo from './additionalInfo';
import ReviewSection from './reviewSection';
import ApplicationCard from './applicationCard';
  
function MarketPlace() {
    const [activeTab, setActiveTab] = useState('Owned Applications');
    const [showMore, setShowMore] = useState(false);
  
    const handleShowMore = () => {
      setShowMore(!showMore);
    };
  
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
                        Market Place -- Application Details
                    </a>
                    </li>
                </ul>
            </div>

            <ApplicationCard 
            name="Home Assistant" 
            developer="Microsoft Studio" 
            rating="3.7" 
            category="Financial" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum." 
            />

          {/* Description Form */}
          <div className="bg-white p-6 rounded-lg m-4">
            <h3 className="text-lg font-semibold mb-4">Description</h3>
      
            <div className='flex flex-col gap-4'>
              <div>
                <h4 className='text-xs font-semibold'>BASIC INFO</h4>
                <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
              </div>
              
              <div>
                <h4 className='text-xs font-semibold'>EXPERIENCE MORE</h4>
                <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
              </div>
              
              <div>
                <h4 className='text-xs font-semibold'>NOTE</h4>
                <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
              </div>
              
              <button onClick={handleShowMore} className="text-start text-sm font-semibold text-[#079455] hover:underline">{showMore ? "Show less" : "Show more"}</button>
            </div>
          </div>

          <ReviewSection />
          <AdditionalInfo />
          

        
        </div>
    </div>
  );
}

export default MarketPlace;