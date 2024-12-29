import React from 'react';
import { GoStack } from "react-icons/go";

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "€10.95",
      features: [
        "Includes up to 1 charging processes.",
        "Rate: Electricity price + €0.50 / kWh.",
      ],
      buttonText: "Subscribe",
    },
    {
      title: "Business Plan",
      price: "€19.95",
      features: [
        "Includes up to 10 charging processes.",
        "Rate: Electricity price + €0.25 / kWh.",
      ],
      buttonText: "Subscribed",
    },
    {
      title: "Enterprise Plan",
      price: "€39.95",
      features: [
        "Includes unlimited charging processes.",
        "Rate: Electricity price + €0.20 / kWh.",
      ],
      buttonText: "Subscribe",
    },
  ];

  return (
    <div className="bg-white p-6 m-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Pricing Plans</h2>
      <p className="text-sm mb-6">Pick an account plan that fits your workflow.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <div className="flex items-center mb-4">
              <GoStack/>
              <h3 className="ml-2 text-sm font-semibold">{plan.title}</h3>
            </div>

            <div className="text-xl font-bold mb-4">{plan.price} <span className="text-sm">per month</span></div>

            <ul className="list-disc text-xs list-inside mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <button className="bg-[#079455] text-xs w-full hover:bg-green-600 text-white font-bold py-2 px-4 rounded">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;