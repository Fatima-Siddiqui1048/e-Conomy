const exp = require("constants");

const ApplicationCard = ({ name, developer, rating, category, description }) => {
    return (
      <div className="bg-white p-4 rounded-lg m-4">
        <div className="flex items-center mb-2">
          {/* Replace with your actual icon component or image */}
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">
            {/* Icon here */}
          </div>
          <div className='flex flex-col'>
            <span className="text-lg font-semibold">{name}</span>
            <span className="text-sm text-gray-500">{developer}</span>
            <div className="flex gap-4 items-center justify-between mt-1">
              <div className='flex'>
                <span className="text-sm">{rating}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.75 1.75 0 002.188 0M18.723 9l-15.547 0a2.25 2.25 0 00-2.188 2.188l0 15.547a2.25 2.25 0 002.188 2.188l15.547 0a2.25 2.25 0 002.188-2.188L18.723 9z" />
                </svg>
              </div>  
              <span className="text-sm">295 Rating</span>
              <span className="text-sm ml-2">{category}</span>
            </div>
          </div>
        </div>
        <p className="text-xs w-1/2 mt-6">{description}</p>
        <button className="w-[150] bg-[#079455] text-xs hover:bg-green-600 text-white px-4 py-2 rounded-md mt-4">Install</button>
      </div>
    );
  };

  export default ApplicationCard;