import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Image from '../../../../public/Ratings.png';

const ReviewSection = () => {
  return (
    <div className="bg-white p-4 m-4 text-xs rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Reviews & Rating</h2>
        <button className="bg-[#079455] text-white px-4 py-2 rounded-md">Write a review</button>
      </div>

      <div className="flex items-center mb-4 p-4">
        <div className='flex flex-col gap-4'>
            <span className="text-4xl font-bold">4.7</span>
            <span className="text-md">295 Rating</span>
        </div>
        <div>
        <img src={Image} alt="Market Place Chart" className="w-[20] mr-2 " />
        </div>
        
        {/* <div className="flex">
          <FaStar className="w-5 h-5 mr-1"/>
          <FaStar className="w-5 h-5 mr-1"/>
          <FaStar className="w-5 h-5 mr-1"/>
          <FaRegStar className="w-5 h-5 mr-1"/>
          <FaRegStar className="w-5 h-5 mr-1"/>
        </div> */}
      </div>

      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            <FaUser className="w-5 h-5 rounded-full" />
            <span className="ml-2 text-sm text-gray-800">Gevorg Karapetyan</span>
          </div>
        </div>
        <div className="flex mt-4">
            <FaStar className="w-4 h-4 mr-1"/>
            <FaStar className="w-4 h-4 mr-1"/>
            <FaStar className="w-4 h-4 mr-1"/>
            <FaRegStar className="w-4 h-4 mr-1"/>
            <FaRegStar className="w-4 h-4 mr-1"/>
          </div>
        <span className="text-xs text-gray-500">October 26, 2023</span>
        <p className="mt-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
        </p>
      </div>

      <button className="mt-4 text-center text-blue-500 hover:underline">See All</button>
    </div>
  );
};

export default ReviewSection;