import React from "react";
import { FaCar } from "react-icons/fa";

const AboutSection1 = () => {
  return (
    <div className="container mx-auto px-12 py-8 flex flex-col lg:flex-row gap-8 items-center mt-[220px] sm:mt-[355px] md:mt-[435px]">
      {/* Left side: Image Section */}
      <div className="relative w-full sm:w-[90%] lg:w-[40%] border-[10px] rounded-xl border-[#ffca08] shadow-lg bg-yellow-500">
        <img
          src="/imgs/home-2.jpg"
          // src="https://via.placeholder.com/400x400"
          alt="Car rental"
          className="shadow-lg w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,22,1,0.8)] to-[rgba(28,22,1,0.8)] rounded-lg flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold text-center">
            ABOUT OUR
            <br />
            CAR RENTAL
          </h2>
        </div>
      </div>

      {/* Right side: Text and Features Section */}
      <div className="w-full sm:w-[90%] lg:w-[60%]">
        <p className="text-[#666666] text-lg mb-6 font-[Roboto] leading-loose">
          A car rental, hire car, or car hire agency is a company that rents
          automobiles for short periods of time to the public, generally ranging
          from a few hours to a few weeks. It is often organized with numerous
          local branches (which allow a user to return a vehicle to a different
          location), and primarily located near airports or busy city areas and
          often complemented by a website allowing online reservations.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
          <div className="bg-black p-2 rounded-full">
              <FaCar className="text-yellow-500" size={24} />
            </div>
            <span className="font-semibold text-gray-800 italic">
              Limited liability for shareholders.
            </span>
          </div>
          <div className="flex items-center space-x-4">
          <div className="bg-black p-2 rounded-full">
              <FaCar className="text-yellow-500" size={24} />
            </div>
            <span className="font-semibold text-gray-800 italic">
              Well understood and accepted.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-black p-2 rounded-full">
              <FaCar className="text-yellow-500" size={24} />
            </div>
            <span className="font-semibold text-gray-800 italic">
              Able to raise significant capital.
            </span>
          </div>
          <div className="flex items-center space-x-4">
          <div className="bg-black p-2 rounded-full">
              <FaCar className="text-yellow-500" size={24} />
            </div>
            <span className="font-semibold text-gray-800 italic">
              Offset against future profits.
            </span>
          </div>
          <div className="flex items-center space-x-4">
          <div className="bg-black p-2 rounded-full">
              <FaCar className="text-yellow-500" size={24} />
            </div>
            <span className="font-semibold text-gray-800 italic">
              Easy to sell and pass ownership.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-black p-2 rounded-full">
              <FaCar className="text-yellow-500" size={24} />
            </div>
            <span className="font-semibold text-gray-800 italic">
              Profits can be reinvested & paid.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
