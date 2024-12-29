import React from 'react';

const additionalInfoData = [
  {
    icon: 'ActiveDevice2.png',
    title: "Published by",
    value: "Microsoft studio",
  },
  {
    icon: 'ActiveDevice2.png',
    title: "Release Date",
    value: "2/27/23",
  },
  {
    icon: 'ActiveDevice2.png',
    title: "Category",
    value: "Financial",
  },
  {
    icon: 'ActiveDevice2.png',
    title: "Approximate size",
    value: "70.2 MB",
  },
  {
    icon: 'ActiveDevice2.png',
    title: "Language",
    value: "English (United State)",
    colSpan: 2,
  },
  {
    icon: 'ActiveDevice2.png',
    title: "Installation",
    value: "Get this app while signed in to your F-economy and install on up to 10 Windows devices.",
    colSpan: 2,
  },
  {
    icon: 'ActiveDevice2.png',
    title: "Additional Terms",
    value: "Privacy Policy Terms of Transaction",
    colSpan: 2,
  },
];

const AdditionalInfo = () => {
  return (
    <div className="bg-white p-4 m-4 text-xs rounded-md">
      <h2 className="text-lg font-semibold mb-4">Additional Information</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {additionalInfoData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${item.colSpan ? `col-span-${item.colSpan}` : ""}`}
          >
            <img src={item.icon} alt={item.title} className="w-6 h-6 mr-2" />
            <div className='flex flex-col'>
              <span className="order-1 font-medium text-gray-700">{item.title}</span>
              <span className="order-2 text-xs mt-1">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo;