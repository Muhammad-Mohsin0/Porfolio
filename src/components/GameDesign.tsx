import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const GameDesign = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <section className="bg-[#111111] text-white p-8 md:p-14 lg:p-20 rounded-[32px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between mt-12">
        <div className="relative z-10 max-w-xl text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Got a Game Design Challenge? <br className="hidden md:block" />
            Let’s Build It Together!
          </h2>

          <p className="text-[#B6B4B4] text-base md:text-lg mb-10 max-w-md md:max-w-none">
            I’m here to help. Reach out to discuss your project, and let’s
            create innovative solutions that achieve your goals.
          </p>

          <button className="group flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-semibold transition-all hover:bg-gray-100">
            <span className="text-lg">Hire Me Now</span>
            <div className="bg-[#FF6B4A] text-white p-2 rounded-full transition-transform group-hover:rotate-45">
              <FiArrowUpRight size={24} />
            </div>
          </button>
        </div>

        <div
          className="absolute -bottom-20 -right-20 md:top-[-10%] md:-right-24 w-[250px] h-[250px] md:w-[600px] md:h-[600px] 
                    bg-gradient-to-br from-[#444242] to-transparent 
                    rounded-full opacity-40 md:opacity-60 pointer-events-none border border-white/5 z-0"
        ></div>
      </section>
    </div>
  );
};

export default GameDesign;
