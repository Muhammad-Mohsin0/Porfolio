import React from "react";
import { FaFigma, FaAws } from "react-icons/fa";
import { PiFramerLogo, PiSlackLogoLight } from "react-icons/pi";

const Works = () => {
  return (
    <div id="work" className="pt-12 px-4">
      
      <div className="flex justify-center items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          An Experienced Unreal Engine Developer <br className="hidden sm:block" />
          Who’s Always Learning and Innovating
        </h1>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-7xl bg-[#eeeded] p-6 sm:p-8 rounded-xl">
          
          <h1 className="text-gray-700 text-base sm:text-lg font-medium mb-8">
            Key Tools and Technologies <br className="hidden sm:block" />
            I Use to Craft Exceptional Design
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
              <FaFigma className="bg-[#f5f5f5] text-3xl sm:text-4xl p-2 rounded-full  mb-4" />
              <h1 className="font-semibold text-gray-800">Figma</h1>
              <p className="text-sm text-gray-500">Design</p>
            </div>

            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
              <PiFramerLogo className="bg-[#f5f5f5] text-3xl sm:text-4xl p-2  rounded-full mb-4" />
              <h1 className="font-semibold text-gray-800">Framer</h1>
              <p className="text-sm text-gray-500">Development</p>
            </div>

            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
              <PiSlackLogoLight className="bg-[#f5f5f5] text-3xl sm:text-4xl p-2  rounded-full mb-4" />
              <h1 className="font-semibold text-gray-800">Slack</h1>
              <p className="text-sm text-gray-500">Communication</p>
            </div>

            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
              <FaAws className="bg-[#f5f5f5] text-3xl sm:text-4xl p-2  rounded-full mb-4" />
              <h1 className="font-semibold text-gray-800">AWS</h1>
              <p className="text-sm text-gray-500">Cloud</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
