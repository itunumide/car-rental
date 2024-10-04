import React, { useState } from "react";
import Carousel from "./Carousel";

const MoreInfo = () => {
  const [activeTab, setActiveTab] = useState("Car Rental");

  const tabs = [
    {
      name: "Car Rental",
      content:
        "We invest in local solutions to the local water crisis in sub-Saharan Africa. We provide clean water. In order to help the communities we have created a group of farmers who donate agricultural product to food banks.",
    },
    {
      name: "Drivers",
      content:
        "If you haven't any charity in your heart, You have the worst kind of heart trouble. Good actions give strength to ourselves and inspire good actions in others.",
    },
    {
      name: "Buy/Sell",
      content:
        "The way you get meaning into your life is to devote yourself to loving others, devote yourself to your community around you, and devote yourself to creating something that gives you purpose and meaning. Happiness is not something ready made. It comes from your own actions!",
    },
    {
      name: "Agreements",
      content:
        "The way you get meaning into your life is to devote yourself to loving others, devote yourself to your community around you, and devote yourself to creating something that gives you purpose and meaning. Happiness is not something ready made. It comes from your own actions!",
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDropdownChange = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-[180px] sm:mt-[240px] lg:mt-[340px] px-8 space-x-8">
      {/* Left Section */}
      <div className="">
        <h1 className="italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-[Roboto] !leading-[1.5]">
          We believe we are professional
          <span className="-text--clr-primary"> Car Rental</span>
        </h1>
        <div className="w-full mt-4">
          {/* Mobile: Dropdown for Tabs */}
          <div className="block sm:hidden mb-4 ">
            <select
              value={activeTab}
              onChange={handleDropdownChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-colors outline-none"
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.name}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Tab Navigation */}
          <div className="hidden sm:flex justify-between items-center border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`relative flex items-center font-semibold hover:text-customBlue font-[Roboto] space-x-1 pb-2 transition-colors ${
                  activeTab === tab.name ? "-text--clr-primary hover:-text--clr-primary" : "text-[#606060]"
                }`}
              >
                {/* Circle */}
                <span
                  className={`border mr-1 ${
                    activeTab === tab.name ? " -border--clr-primary" : "border-[#606060]"
                  } w-2.5 h-2.5 rounded-full`}
                ></span>
                {/* Tab Name */}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Horizontal Rule - Indicator for Desktop */}
          <div className="relative hidden sm:block">
            <div
              className={`absolute -top-px h-0.5 w-1/4 bg-yellow-500 transition-all duration-300 ease-in-out`}
              style={{
                left:
                  activeTab === "Car Rental"
                    ? "0%"
                    : activeTab === "Drivers"
                    ? "25%"
                    : activeTab === "Buy/Sell"
                    ? "50%"
                    : "75%",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="mt-4">
            {tabs.map((tab) =>
              activeTab === tab.name ? (
                <p key={tab.name} className="text-gray-700 text-base font-[Roboto] leading-[2]">
                  {tab.content}
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="p-4">
        <Carousel />
      </div>
    </div>
  );
};

export default MoreInfo;
