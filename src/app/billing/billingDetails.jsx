// import exp from 'constants';
import React, { useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import { HiDotsVertical } from "react-icons/hi";
import { SketchPicker } from 'react-color';

const BillingAccountForm = () => {
  const [accountName, setAccountName] = useState('');
  const [contactName, setContactName] = useState('');
  const [accountType, setAccountType] = useState('Private');
  const [email, setEmail] = useState('');
  const [colorCode, setColorCode] = useState('#000000');
  const [streetAddress, setStreetAddress] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [showPicker, setShowPicker] = useState(false);
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: 'Home Charging',
      isDefault: true,
      contact: 'John A. Smith',
      email: 'johansmith12@gmail.com',
    },
    {
      id: 2,
      name: 'Business Charging',
      isDefault: false,
      contact: 'John A. Smith',
      email: 'johansmith12@gmail.com',
    },
  ]);
  const [showBillingForm, setShowBillingForm] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log({
      accountName,
      contactName,
      accountType,
      email,
      colorCode,
      streetAddress,
      state,
      zip,
      country,
      city,
    });

    setShowBillingForm(true);
  };

  const handleDefaultLocation = (id) => {
    setLocations(
      locations.map((location) => ({
        ...location,
        isDefault: location.id === id,
      }))
    );
  };

  const handleDeleteLocation = (id) => {
    setLocations(locations.filter((location) => location.id !== id));
  };

  const handleAddLocation = () => {
    const newLocation = {
      id: Date.now(), // Generate a unique ID
      name: 'New Location',
      isDefault: false,
      contact: '',
      email: '',
    };
    setLocations([...locations, newLocation]);
  };

  return (
    <div className="w-full p-4 rounded-md">
      
      {showBillingForm === false && (
      <form className="w-full bg-white rounded-md " onSubmit={handleSubmit}>
        <div className="w-full order-2 flex flex-col h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Account</h2>
          <p className="text-sm mb-4">Update your billing details and address.</p>

          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
          <div>
              <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">
              Account Name
              </label>
              <input
              type="text"
              id="businessName"
              placeholder="Enter business name"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
          </div>
          <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
              Contact No.
              </label>
              <input
              type="text"
              id="registrationNo"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
          </div>
          </div>

          <div className="flex flex-col md:flex-row w-full items-center justify-center mt-4">
            <div className='flex flex-col w-full md:w-1/2'>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                Account
              </label>
              <p className="mt-1 text-sm text-gray-500">Choose account type.</p>
            </div>
            
            <div className='text-sm flex gap-4 w-full md:w-1/2'>
              <div className="mt-1">
                <input
                  type="radio"
                  id="privateAccount"
                  name="accountType"
                  value="Private"
                  checked={accountType === 'Private'}
                  onChange={() => setAccountType('Private')}
                  className="mr-2"
                />
                <label htmlFor="privateAccount" className="inline-flex items-center cursor-pointer">
                  Private Account
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="radio"
                  id="businessAccount"
                  name="accountType"
                  value="Business"
                  checked={accountType === 'Business'}
                  onChange={() => setAccountType('Business')}
                  className="mr-2"
                />
                <label htmlFor="businessAccount" className="inline-flex items-center cursor-pointer">
                  Business Account
                </label>
              </div>
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

          <div className="flex flex-col md:flex-row w-full items-center justify-center mt-4">
            <div className='flex flex-col w-full md:w-1/2'>
              <label htmlFor="colorCode" className="block text-sm font-medium text-gray-700">
                Icon with Color Code
              </label>
              <p className="mt-1 text-sm text-gray-500">Color code with your Account Icon</p>
            </div>
            
            <div className='flex flex-col w-full md:w-1/2'>
              <div className='text-sm flex w-full border rounded-md'>
                <input
                  type="text"
                  id="businessName"
                  placeholder={selectedColor}
                  className="mt-1 p-2 w-full focus:outline-none"
                  />
                  <div onClick={() => setShowPicker(!showPicker)} className="mt-1 p-2 mr-2 w-8 h-8 rounded-full " style={{ backgroundColor: selectedColor }}></div>
              </div>
              {showPicker && (
          <div
            style={{
              position: "relative",
              top: "0px", // Adjust to control vertical positioning
              left: "0px", // Adjust to control horizontal positioning
              zIndex: 10,
            }}
          >
            <SketchPicker
              color={selectedColor}
              onChangeComplete={(color) => setSelectedColor(color.hex)}
            />
          </div>
              )}
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

        </div>
      </form>
      )}

      {/* A form after handle submit button pressed */}
      {showBillingForm === true && (
        <form className="w-full bg-white rounded-md " onSubmit={handleSubmit}>
        <div className="w-full order-2 flex flex-col h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Account</h2>
          <p className="text-sm mb-4">Update your billing details and address.</p>

          <div className="flex flex-col md:flex-row w-full mt-4">
            <div className='flex flex-col w-full md:w-1/2'>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <p className="mt-1 text-sm text-gray-500">Where should invoice be sent?</p>
            </div>
            
            <div className="w-full space-y-4">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-gray-100 rounded-md p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold">{location.name}</p>
                    <p className="text-xs text-gray-500">{location.contact}</p>
                    <p className="text-xs text-gray-500">{location.email}</p>
                  </div>
                  <div className='flex'>
                    <button
                      className={`px-2 py-1 rounded-sm ${
                        location.isDefault ? 'text-xs border rounded-md bg-[#ABEFC6] text-[#067647]' : 'text-gray-500'
                      }`}
                      onClick={() => handleDefaultLocation(location.id)}
                    >
                      {location.isDefault ? 'Default' : ''}
                    </button>
                    <button
                      className="px-2 py-1 rounded-sm text-gray-500 ml-2"
                      onClick={() => handleDeleteLocation(location.id)}
                    >
                      <HiDotsVertical/>
                    </button>
                  </div>
                </div>
              ))}

              <button
                className="bg-white text-xs text-[#079455] px-4 py-2 rounded-md flex items-center"
                onClick={handleAddLocation}
              >
                <MdOutlineAddCircle size={20} className="mr-2" />
                Add another
              </button>
            </div>

          </div>
        </div>
        </form>
      )}
     

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

export default BillingAccountForm

            