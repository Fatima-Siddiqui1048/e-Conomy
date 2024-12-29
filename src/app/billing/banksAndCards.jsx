// import exp from 'constants';
import React, { useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import { HiDotsVertical } from "react-icons/hi";
import { RiVisaLine ,RiMastercardFill, RiBankFill} from "react-icons/ri";

const BankCard = ({ bankName, cardNumber, isDefault, onSetDefault, onEdit , icon}) => {
  return (
    <div className="flex flex-col w-full md:w-3/4 bg-white border border-gray-300 rounded-md p-4 flex items-start justify-between">
      <div className="flex items-center justify-center gap-4">
        {icon}
        <div className='order-2'>
          <p className="text-sm font-semibold">{bankName}</p>
          <p className="text-xs text-gray-500">{cardNumber}</p>
        </div>
      </div>
      <div className='flex'>
        <button
          className={`px-2 pt-4 rounded-sm ${
            isDefault ? 'text-sm text-[#067647]' : 'text-gray-500'
          }`}
          onClick={onSetDefault}
        >
          {isDefault ? 'Default' : 'Set as default'}
        </button>
        <button className="px-2 pt-4 text-sm rounded-sm text-gray-500 ml-2" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};


const BankAndCards = () => {
    const [bankCards, setBankCards] = useState([
        {
          id: 1,
          bankName: 'Deutsche Bank',
          cardNumber: '**** **** **** 4567',
          isDefault: true, 
          icon: <RiBankFill className='w-6 h-6'/>
        },
        // Add more bank cards here
      ]);

      const [paymentCards, setPaymentCards] = useState([
        {
          id: 1,
          cardName: 'Visa Ending in 1234',
          expiry: 'Expiry 06/2024',
          isDefault: true,
          icon: <RiVisaLine className='w-6 h-6'/>
        },
        {
            id: 2,
            cardName: 'Master Card Ending in 1234',
            expiry: 'Expiry 06/2024',
            isDefault: true,
            icon: <RiMastercardFill className='w-6 h-6'/>
          },
        // Add more bank cards here
      ]);
    
      const handleSetDefault = (id) => {
        setBankCards(
          bankCards.map((card) => ({
            ...card,
            isDefault: card.id === id,
          }))
        );
      };
    
      const handleEdit = (id) => {
        // Implement edit logic here
        console.log(`Editing bank card with ID: ${id}`);
      };
    
      const handleAddBankCard = () => {
        // Implement add bank card logic here
        console.log('Adding new bank card');
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., send data to server
      }
  
  return (
    <div className="w-full p-4 rounded-md">
      
        <form className="w-full bg-white rounded-md " onSubmit={handleSubmit}>
        <div className="w-full order-2 flex flex-col h-full items-start justify-center border rounded-lg shadow-md shadow-gray p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Account</h2>
          <p className="text-sm mb-4">Your billing details and address.</p>

          <div className="flex flex-col md:flex-row w-full mt-4">
            <div className='flex flex-col w-full md:w-1/2'>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                Bank Account
              </label>
              <p className="mt-1 text-sm text-gray-500">Bank details to receive payments</p>
            </div>

            <div className="space-y-4 w-full">
                {bankCards.map((card) => (
                    <BankCard
                    key={card.id}
                    bankName={card.bankName}
                    cardNumber={card.cardNumber}
                    isDefault={card.isDefault}
                    onSetDefault={() => handleSetDefault(card.id)}
                    onEdit={() => handleEdit(card.id)}
                    icon={card.icon}
                    />
                ))}
                <button
                className="bg-white text-xs text-[#079455] px-4 py-2 rounded-md flex items-center"
                onClick={handleAddBankCard}
                >
                <MdOutlineAddCircle size={20} className="mr-2" />
                Add another
                </button>
                </div>
          </div>

          <hr className='w-full h-10'></hr>

          <div className="flex flex-col md:flex-row w-full mt-4">
            <div className='flex flex-col w-full md:w-1/2'>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                Card Details
              </label>
              <p className="mt-1 text-sm text-gray-500">Select Default Payment Card</p>
            </div>

            <div className="space-y-4 w-full">
                {paymentCards.map((card) => (
                    <BankCard
                    key={card.id}
                    bankName={card.cardName}
                    cardNumber={card.expiry}
                    isDefault={card.isDefault}
                    onSetDefault={() => handleSetDefault(card.id)}
                    onEdit={() => handleEdit(card.id)}
                    icon={card.icon}
                    />
                ))}
                <button
                className="bg-white text-xs text-[#079455] px-4 py-2 rounded-md flex items-center"
                onClick={handleAddBankCard}
                >
                <MdOutlineAddCircle size={20} className="mr-2" />
                Add another
                </button>
                </div>
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

export default BankAndCards

            