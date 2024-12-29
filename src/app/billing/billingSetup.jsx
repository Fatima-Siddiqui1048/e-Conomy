// import exp from 'constants';
import React, { useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";

const ThirdPartyBillingSetup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [answer, setAnswer] = useState(null);
    const [participants, setParticipants] = useState(['you@example.com', 'you@example.com']);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
        name: 'Basic Plan',
        price: '€10.95',
        description: 'Includes up to 1 charging processes, Rate: Electricity price + €0.50 / kWh.',
        },
        {
        name: 'Business Plan',
        price: '€19.95',
        description: 'Includes up to 10 charging processes, Rate: Electricity price + €0.25/kWh.',
        },
        {
        name: 'Enterprise Plan',
        price: '€39.95',
        description: 'Includes up to unlimited charging processes, Rate: Electricity price + €0.20 / kWh.',
        },
    ];

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handleAddParticipant = () => {
        setParticipants([...participants, '']); // Add an empty input field
    };

    const handleInputChange = (index, value) => {
        const updatedParticipants = [...participants];
        updatedParticipants[index] = value;
        setParticipants(updatedParticipants);
    };

    const handleAnswerChange = (value) => {
        setAnswer(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentStep(currentStep + 1); 
    }
  
  return (
    <div className="w-full p-4 rounded-md">
      
        <form className="w-full bg-white rounded-md " onSubmit={handleSubmit}>
        <div className="w-full order-2 flex flex-col h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
            <h2 className="text-lg font-semibold mb-4">Third Party Billing Setup</h2>
            <p className="text-sm mb-4">Configure your billing preferences</p>


            <div className="flex order-2 flex-col lg:flex-row items-start mt-10 gap-6 bg-white rounded-lg shadow-xs h-full w-full lg:w-full">
                <div className="order-1 flex flex-row gap-2 lg:flex-col items-center justify-center lg:items-start lg:justify-start  lg:space-y-6 w-full lg:w-1/4 mt-4">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
                        <div className='flex flex-col items-start'>    
                        <h1 className="text-xs lg:text-md font-semibold text-center">
                            <span className="hidden sm:inline-block">Question</span> 
                            <span className="sm:hidden">Step 1</span> 
                        </h1>
                            <p className="hidden lg:block text-sm text-gray-600">Please select option</p>
                        </div> 
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
                        <div className='flex flex-col items-start'> 
                            <h1 className="text-xs lg:text-md font-semibold text-center">
                                <span className="hidden sm:inline-block">Bank Account</span> 
                                <span className="sm:hidden">Step 2</span> 
                            </h1>   
                            <p className="hidden lg:block text-sm text-gray-600">A few details about your bank</p>
                        </div> 
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
                        <div className='flex flex-col items-start'>  
                            <h1 className="text-xs lg:text-md font-semibold text-center">
                                <span className="hidden sm:inline-block">Invite Participant</span> 
                                <span className="sm:hidden">Step 3</span> 
                            </h1>  
                            <p className="hidden lg:block text-sm text-gray-600">Enter mail to send invitation</p>
                        </div> 
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <div className={`w-5 h-5 rounded-full mr-0 lg:mr-2 ${currentStep >= 4 ? 'bg-green-500' : 'bg-gray-300'}`}></div> 
                        <div className='flex flex-col items-start'>    
                            <h1 className="text-xs lg:text-md font-semibold text-center">
                                <span className="hidden sm:inline-block">Pricing Plan</span> 
                                <span className="sm:hidden">Step 4</span> 
                            </h1>
                            <p className="hidden lg:block text-sm text-gray-600">Choose pricing plan</p>
                        </div> 
                    </div>
                </div>

            {currentStep === 1 && (

                <div className="order-2 w-full lg:w-3/4 p-4 rounded-md border border-gray-200">
                <p className="text-sm font-medium">Question: Would you like to bill your own electricity to third parties?</p>
                <div className="rounded-md border border-gray-200 w-full lg:w-1/2 p-2 pl-4 mt-4">
                <label className="flex items-center cursor-pointer">
                    <input 
                    type="radio" 
                    value="Yes" 
                    checked={answer === "Yes"} 
                    onChange={() => handleAnswerChange("Yes")} 
                    className="mr-2" 
                    />
                    Yes
                </label>
                </div>
                <div className="rounded-md  border border-gray-200 w-full lg:w-1/2 p-2 pl-4 mt-4">
                <label className="flex items-center cursor-pointer">
                    <input 
                    type="radio" 
                    value="No" 
                    checked={answer === "No"} 
                    onChange={() => handleAnswerChange("No")} 
                    className="mr-2" 
                    />
                    No
                </label>
                </div>
                </div>
            )}

            {currentStep === 2 && (
            <div className="order-2 flex flex-col w-full lg:w-3/4 h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
                <h2 className="text-md lg:text-lg font-bold mb-4">Bank Account</h2>
                {/* <p className="text-md text-gray-600 mb-6">Please enter your company details to continue.</p> */}

                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name
                        </label>
                        <input
                        type="text"
                        id="fullName"
                        placeholder="Enter Name"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="ibanNumber" className="block text-sm font-medium text-gray-700">
                        Iban No.
                        </label>
                        <input
                        type="text"
                        id="ibanNumber"
                        placeholder="DE0000000000000000000000"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 w-full md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="accountNo" className="block text-sm font-medium text-gray-700">
                        Account Number
                        </label>
                        <input
                        type="text"
                        id="accountNo"
                        placeholder="12345678913212454"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                         Bank Name
                        </label>
                        <input
                        type="text"
                        id="bankName"
                        placeholder="Eg. Deutsche Bank"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 w-full md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">
                        Branch Name
                        </label>
                        <input
                        type="text"
                        id="branchName"
                        placeholder="Eg. Bonn Branch"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="swiftCode" className="block text-sm font-medium text-gray-700">
                         SWIFT Code
                        </label>
                        <input
                        type="text"
                        id="swiftCode"
                        placeholder="DEUTDEBBXXX"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

            </div>
            )}

            {currentStep === 3 && (
            <div className="order-2 flex flex-col  w-full lg:w-3/4 h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
                <h2 className="text-md lg:text-lg font-bold mb-4">Invite Participant</h2>
                
                <div className="space-y-2">
                {participants.map((participant, index) => (
                <div key={index} className="w-full flex gap-4 items-center">
                    <IoMdMail className='w-6 h-6'/>
                    <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full text-gray-600 border rounded-md p-4 focus:border-blue-500 focus:outline-none"
                    value={participant}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                </div>
                ))}
            </div>
             <button
                className="bg-white text-xs text-[#079455] px-4 py-2 rounded-md flex items-center"
                onClick={handleAddParticipant}
                >
                <MdOutlineAddCircle size={20} className="mr-2" />
                Add another
                </button>
            </div>
            )}

            {currentStep === 4 && (
                <div className="order-2 w-full p-4 rounded-md border border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Pricing Plans</h2>
                <div className="space-y-4">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`border flex items-center justify-between p-4 rounded-md ${
                        selectedPlan === plan ? 'bg-blue-50' : 'bg-white'
                      }`}
                      onClick={() => handlePlanSelect(plan)}
                    >
                      <div>
                        <span className="text-sm text-gray-500">{plan.name}</span>
                        <h3 className="text-lg font-semibold">{plan.price}</h3>
                        <p className="text-sm text-gray-500">{plan.description}</p>
                      </div>
                      <input
                        type="radio"
                        checked={selectedPlan === plan}
                        onChange={() => handlePlanSelect(plan)}
                        className="mr-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            </div>
        

        </div>
        </form>

      <div className='w-full flex order-3 gap-2 w-full justify-end'>
        <button  onClick={handleSubmit} className="flex order-1 border border-gray-400 text-gray-600 bg-white hover:bg-red-300 font-bold py-2 px-4 rounded-md mt-8">
          Cancel
        </button>

        <button onClick={handleSubmit} className="flex order-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-8">
          Submit
        </button>
      </div>
      
</div>
  )};

export default ThirdPartyBillingSetup

            