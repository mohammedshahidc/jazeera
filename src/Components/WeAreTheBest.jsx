import React from "react";
import lowest_price from "../Images/lowest_price.svg";
import save_secure from "../Images/save_secure.svg";
import werewithu from "../Images/werewithu.svg";

const WhyweAreTheBest = () => {
  const features = [
    {
      icon: lowest_price,
      title: "Lowest Price Guarantee",
      text: "We provide the best prices without compromising on quality.",
    },
    {
      icon: save_secure,
      title: "Safe & Secure",
      text: "Your bookings and payments are 100% protected with us.",
    },
    {
      icon: werewithu,
      title: "We’re With You",
      text: "Our support team is available 24/7 to help you anytime.",
    },
  ];

  return (
    <div className="w-screen px-8 py-12 bg-gray-50">
      <h1 className="text-center font-semibold  text-black mb-10">
       <span className="text-4xl">Why</span>  We Are The Best
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
          >
            <div className="border-1 border-blue-800 rounded-full p-4 mb-4 flex items-center justify-center w-24 h-24">
              <img src={feature.icon} alt={feature.title} className="h-12 w-12" />
            </div>
            <h2 className="text-xl font-bold text-black mb-2">
              {feature.title}
            </h2>
            <p className="text-black text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyweAreTheBest;
