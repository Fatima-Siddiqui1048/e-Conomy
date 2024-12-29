"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import companyLogo from '../../../public/Logo.png';
import Link from 'next/link';

const AccountTypeScreen = () => {
  const [selectedAccountType, setSelectedAccountType] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  const handleContinue = () => {
    if(currentStep < 4){
        console.log(currentStep);
        setCurrentStep(currentStep + 1); 
    }
    
  };

  return (
    <div className="flex flex-col min-h-screen w-screen p-6 bg-white">
        <div className="flex order-1 items-center ">
          <Image 
            src={companyLogo} 
            alt="Company Logo" 
            width='md'
            height='sm' 
            className="" 
          />
        </div>

      <div className="flex order-2 flex-col lg:flex-row items-start mt-10 gap-6 bg-white rounded-lg shadow-xs h-full w-full lg:w-full"> 

        <div className="order-1 flex flex-row gap-6 lg:flex-col items-center justify-center lg:items-start lg:justify-start  lg:space-y-6 w-full lg:w-1/4 mt-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
            <div className='flex flex-col items-start'>    
            <h1 className="text-xs lg:text-md font-semibold text-center">
                <span className="hidden sm:inline-block">Account Type</span> 
                <span className="sm:hidden">Step 1</span> 
            </h1>
                <p className="hidden lg:block text-sm text-gray-600">Please select account type</p>
            </div> 
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
            <div className='flex flex-col items-start'> 
                <h1 className="text-xs lg:text-md font-semibold text-center">
                    <span className="hidden sm:inline-block">Company Details</span> 
                    <span className="sm:hidden">Step 2</span> 
                </h1>   
                <p className="hidden lg:block text-sm text-gray-600">A few details about your company</p>
            </div> 
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
            <div className='flex flex-col items-start'>  
                <h1 className="text-xs lg:text-md font-semibold text-center">
                    <span className="hidden sm:inline-block">Service Offering</span> 
                    <span className="sm:hidden">Step 3</span> 
                </h1>  
                <p className="hidden lg:block text-sm text-gray-600">Select the type of service</p>
            </div> 
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 4 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
            <div className='flex flex-col items-start'>    
                <h1 className="text-xs lg:text-md font-semibold text-center">
                    <span className="hidden sm:inline-block">Account Setup Successfully</span> 
                    <span className="sm:hidden">Step 4</span> 
                </h1>
                <p className="hidden lg:block text-sm text-gray-600">You successfully step-up your account</p>
            </div> 
          </div>

        </div>

{/* Screen 1 */}

        {currentStep === 1 && (
            <div className='order-2 flex flex-col w-full lg:w-3/4 h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6'>
                    <div className='flex flex-col'>
                            <h2 className="text-2xl font-bold mt-10">What kind of account you like to create</h2>
                            <p className="text-md text-gray-600 mt-4 mb-6">Please select your account that you want to create.</p>
                    </div>
                    <div className="order-2 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full my-4 "> 
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start cursor-pointer hover:bg-[#e6ffe6] transition-colors duration-200"> 
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-10 h-10 text-green-500 mb-4"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.94 17.94a5 5 0 01-7.07 0l-4-4a5 5 0 010-7.07l4-4a5 5 0 117.07 7.07L17.94 17.94zM9.66 9.66a5 5 0 017.07 0l4 4a5 5 0 010 7.07l-4 4a5 5 0 01-7.07-7.07L9.66 9.66z" />
                            </svg>
                            <h3 className="text-md font-semibold mb-2">Managed Service Providers</h3>
                            <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet elit.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start cursor-pointer hover:bg-[#e6ffe6] transition-colors duration-200"> 
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-10 h-10 text-green-500 mb-4"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                            </svg>
                            <h3 className="text-md font-semibold mb-2">Application Providers</h3>
                            <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet elit.</p>
                        </div>
                    </div>
            </div>
        )}


{/* Screen 2 */}
        {currentStep === 2 && (
            <div className="order-2 flex flex-col w-full lg:w-3/4 h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
                <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                <p className="text-md text-gray-600 mb-6">Please enter your company details to continue.</p>

                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                    Business Name
                    </label>
                    <input
                    type="text"
                    id="businessName"
                    placeholder="Enter business name"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="registrationNo" className="block text-sm font-medium text-gray-700">
                    Registration No.
                    </label>
                    <input
                    type="text"
                    id="registrationNo"
                    placeholder="Enter your email"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                </div>

                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6 mt-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Enter business email"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                </div>

                <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6 mt-4">
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                    </label>
                    <input
                    type="text"
                    id="city"
                    placeholder="Enter city name"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State/Region
                    </label>
                    <input
                    type="text"
                    id="state"
                    placeholder="Enter name"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    Zip Code
                    </label>
                    <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter zip code"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                </div>

                <div className="w-full mt-4">
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                    Street Address
                </label>
                <input
                    type="text"
                    id="streetAddress"
                    placeholder="Enter address"
                    className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                </div>

                <div className="mt-4">
                <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700">
                    Business License
                </label>
                <div className="flex items-center mt-2">
                    <input type="file" id="businessLicense" className="hidden" />
                    <label htmlFor="businessLicense" className="flex items-center justify-center w-full bg-gray-100 border border-gray-200 rounded-md p-4 cursor-pointer hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 15.172a4 4 0 01-5.656 0M9 12h6M9 12c0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.654-1.346-3-3-3zm0 0c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-1.654-1.346-3-3-3z" />
                    </svg>
                    <span className="ml-2">Click to upload or drag and drop</span>
                    </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">jpg, jpeg, png, pdf files up to 500kb</p>
                </div>
            </div>
        )}


{/* Screen 3 */}
        {currentStep === 3 && (
            <div className="order-2 flex flex-col  w-full lg:w-3/4 h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
                <h2 className="text-2xl font-bold mb-4">Service Offerings</h2>
                <p className="text-md text-gray-600 mb-6">Please select services you provide.</p>

                <div className="mb-4 w-full">
                <label htmlFor="industryFocus" className="block text-sm font-medium text-gray-700">
                    Industry Focus
                </label>
                <select 
                    id="industryFocus" 
                    className="mt-1 p-2 w-full text-gray-700 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">Select Industry</option>
                </select>
                </div>

                <h3 className="text-lg font-semibold mb-2">Services</h3>

                <div className="w-full grid grid-cols-2 gap-4 py-6 text-xs ">
                <div className="flex items-center">
                    <input 
                    type="checkbox" 
                    id="applicationDeployment" 
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
                    />
                    <label htmlFor="applicationDeployment" className="ml-2 font-medium text-gray-700">
                    Application Deployment
                    </label>
                </div>
                <div className="flex items-center">
                    <input 
                    type="checkbox" 
                    id="maintenance" 
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
                    />
                    <label htmlFor="maintenance" className="ml-2 font-medium text-gray-700">
                    Maintenance
                    </label>
                </div>
                <div className="flex items-center">
                    <input 
                    type="checkbox" 
                    id="optimization" 
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
                    />
                    <label htmlFor="optimization" className="ml-2 font-medium text-gray-700">
                    Optimization
                    </label>
                </div>
                <div className="flex items-center">
                    <input 
                    type="checkbox" 
                    id="securityMonitoring" 
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
                    />
                    <label htmlFor="securityMonitoring" className="ml-2 font-medium text-gray-700">
                    Security Monitoring
                    </label>
                </div>
                </div>
            </div>
        )}

{/* Screen 4 */}
        {currentStep === 4 && (
            <div className="order-2 flex flex-col  w-full lg:w-3/4 h-full items-center justify-center border rounded-lg shadow-md shadow-gray p-6">
                <div className="flex items-center justify-center mb-4">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-16 h-16 text-green-500"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Account Setup Successfully</h2>
                <p className="text-md text-gray-600 mb-6">
                Your account has been set up successfully. Now you can enjoy e-Conomy.io webapp and let's start getting services.
                </p>
                <button 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
                >
                <Link href="/dashboard" className="flex items-center px-4 py-2">
              
                    <span className="ml-2">Go to Home</span>
                </Link>
                </button>
            </div>
        )}

      </div>

      <div className='flex order-3 w-full justify-end'>
        <button onClick={handleContinue} className="flex bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-8">
          Continue
        </button>
      </div>
      
    </div>
  );
};

export default AccountTypeScreen;