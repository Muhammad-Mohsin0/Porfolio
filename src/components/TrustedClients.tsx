import React from "react";
import {
  FigmaVector,
  GithubVector,
  JsVector,
  LinkdinVector,
  PostmanVector,
  ReactVector,
  ReduxVector,
} from "../assets/data";

const TrustedClients = () => {
  const data = [
    {
      image: ReactVector,
    },
    {
      image: LinkdinVector,
    },
    {
      image: ReduxVector,
    },
    {
      Image: JsVector,
    },
    {
      Image: PostmanVector,
    },
    {
      Image: FigmaVector,
    },
    {
      Image: GithubVector,
    },
  ];
  return (
    <div className="w-full py-12 px-4">
      <div className="flex items-center justify-center text-[#2d2d2d] text-center mb-10">
        <h1 className="text-sm md:text-lg tracking-wide uppercase font-semibold">
          Trusted By Over 1,000 Clients WorldWide
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative cursor-pointer flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
          >
            <img
              src={item.image || item.Image}
              alt="client logo"
              className="w-full h-full object-contain transition-all duration-300 
                     [filter:grayscale(100%)_brightness(110%)_saturate(0%)] 
                     group-hover:filter-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedClients;
