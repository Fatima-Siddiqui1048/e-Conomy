import React from 'react';

const customers = [
  {
    name: "TechCorp Solutions",
    customerType: "Business",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "App1, App2, App5",
    devices: "Device 1, Device 2",
  },
  {
    name: "John Doe",
    customerType: "Private",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "evcc",
    devices: "My Device",
  },
  {
    name: "HealthPlus",
    customerType: "Business",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "App2, App4",
    devices: "Device 1",
  },
  {
    name: "Jane Smith",
    customerType: "Private",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "App1, App3, App5",
    devices: "My Device",
  },
  {
    name: "EduLearn Inc.",
    customerType: "Business",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "App2, App4",
    devices: "Device 1, Device 2",
  },
  {
    name: "Green Energy Ltd",
    customerType: "Business",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "Home Assistant",
    devices: "Device 1, Device 2",
  },
  {
    name: "Urban Logistics",
    customerType: "Business",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "App1, App3",
    devices: "My Device",
  },
  {
    name: "Urban Logistics",
    customerType: "Business",
    address: "95596 McGlynn Square Apt. 746",
    deployedApplications: "App1, App3",
    devices: "My Device",
  },
];

const Customers = () => {
  return (
    <div className="bg-white m-4 p-4 md:p-10 rounded-lg">
        <h3 className="text-xl font-semibold ">Customers</h3>
        <p className="text-xs text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex text-xs gap-4 justify-between mb-2">
            <input type="text" placeholder="Search" className="border border-gray-400 rounded-md px-4 py-2 w-full" /> 
            <button className="border border-gray-400 bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-md">Filters</button>
        </div>
      <table className="mt-10 text-[0.6rem] sm:text-xs w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left border-b pb-2">Name</th>
            <th className="text-left border-b pb-2">Customer Type</th>
            <th className="text-left border-b pb-2">Address</th>
            <th className="text-left border-b pb-2">Deployed Applications</th>
            <th className="text-left border-b pb-2">Devices</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="py-6 border-b">{customer.name}</td>
              <td className="py-6 border-b">{customer.customerType}</td>
              <td className="py-6 border-b">{customer.address}</td>
              <td className="py-6 border-b">{customer.deployedApplications}</td>
              <td className="py-6 border-b">{customer.devices}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="text-sm text-gray-500 hover:underline">← Previous</button>
        <div className="flex">
          <button className="text-sm text-gray-500 mx-1">1</button>
          <button className="text-sm text-gray-500 mx-1">2</button>
          <button className="text-sm text-gray-500 mx-1">3</button>
          <span className="text-sm text-gray-500 mx-1">...</span>
          <button className="text-sm text-gray-500 mx-1">8</button>
          <button className="text-sm text-gray-500 mx-1">9</button>
          <button className="text-sm text-gray-500 mx-1">10</button>
        </div>
        <button className="text-sm text-gray-500 hover:underline">Next →</button>
      </div>
    </div>
  );
};

export default Customers;