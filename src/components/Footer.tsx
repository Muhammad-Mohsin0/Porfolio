import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-6 py-12 md:px-12 lg:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold mb-4">About Me</h1>
          <h1 className="text-[#615D5C] text-sm leading-relaxed ">
            179 Sampson Street,
            <br />
            Georgetown, CO 80444
          </h1>
          <h1 className="text-[#615D5C] text-sm mt-3">
            (843) 461-5941
          </h1>
          <h1 className="text-[#615D5C] text-sm mt-1">
            hello@johncrea.com
          </h1>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold mb-4">Services</h1>
          <div className="space-y-3">
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              UI/UX Design
            </h1>
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              Web Development
            </h1>
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              Graphic Design
            </h1>
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              3D Animation
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold mb-4">Social Media</h1>
          <div className="space-y-3">
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              Github
            </h1>
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              Instagram
            </h1>
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              Linkedin
            </h1>
            <h1 className="text-[#615D5C] text-sm transition-all duration-300 hover:underline cursor-pointer">
              Facebook
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end lg:text-right">
          <h1 className="text-2xl md:text-l font-semibold leading-tight group transition-all duration-500">
            Turning{" "}
            <span className="text-[#F46038] inline-block">
              Concept
            </span>
            <br className="hidden lg:block" /> into <br className="lg:hidden" />
            Immersive{" "}
            <span className="text-[#F46038] inline-block ">
              Games
            </span>
          </h1>
          <h1 className="text-[#92908F] text-xs mt-8 opacity-70">
            © Copyright Creative Code Tech 2026
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
