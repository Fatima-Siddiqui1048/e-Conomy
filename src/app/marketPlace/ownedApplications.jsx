import React from 'react';

const OwnedApplications = () => {

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
        {
            name: "Application 4",
            category: "Finance",
            price: "Free",
            description: "Streamline software projects, sprints, and bug tracking.",
            src: "InstalledImage1.png"
          },
          {
            name: "Application 5",
            category: "Finance",
            price: "Free",
            description: "Streamline software projects, sprints, and bug tracking.",
            src: "InstalledImage2.png"
          },
          {
            name: "Application 6",
            category: "Finance",
            price: "Paid",
            description: "Streamline software projects, sprints, and bug tracking.",
            src: "InstalledImage3.png"
          },
          {
            name: "Application 7",
            category: "Finance",
            price: "Free",
            description: "Streamline software projects, sprints, and bug tracking.",
            src: "InstalledImage1.png"
          },
          {
            name: "Application 8",
            category: "Finance",
            price: "Free",
            description: "Streamline software projects, sprints, and bug tracking.",
            src: "InstalledImage2.png"
          },
          {
            name: "Application 9",
            category: "Finance",
            price: "Paid",
            description: "Streamline software projects, sprints, and bug tracking.",
            src: "InstalledImage3.png"
          },
      ];
      
    return (
        <div className="bg-white m-4 p-10 rounded-lg">
          <h3 className="text-xl font-semibold ">Owned Applications</h3>
          <p className="text-xs text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex text-xs gap-4 justify-between mb-2">
              <input type="text" placeholder="Search" className="border border-gray-400 rounded-md px-4 py-2 w-full" /> 
              <button className="border border-gray-400 bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-md">Filters</button>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
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
    )
}

export default OwnedApplications;