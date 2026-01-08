import React from "react";
import { digitalbanking, ecommerce, smarthome } from "../assets/data";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div id="projects" className="flex justify-center mt-16 px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Recent Game Highlights & <br className="hidden sm:block" /> Projects
          </h1>

          <p className="max-w-xl text-gray-600 text-sm sm:text-base mx-auto md:mx-0">
            Each project showcases my drive for innovation and excellence in
            game design, tackling unique challenges to create immersive
            experiences.
          </p>
        </div>
      </div>
      ={" "}
      <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              img: digitalbanking,
              title: "Digital Banking",
              type: "Landing Page",
            },
            { img: smarthome, title: "Smart Home", type: "Mobile App" },
            { img: ecommerce, title: "E-Commerce", type: "Dashboard" },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
              />

              <div className="flex items-center justify-between mt-4">
                <div>
                  <h1 className="font-semibold text-gray-800">{item.title}</h1>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>

                <BsArrowUpRightCircleFill
                  className="text-xl sm:text-2xl text-gray-600 group-hover:text-black
                  group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-10 sm:pt-12">
        <button className="bg-gray-100 hover:bg-gray-200 hover:scale-105 py-2 px-8 transition-all duration-200 rounded-2xl font-medium text-sm sm:text-base">
          Show more
        </button>
      </div>
    </>
  );
};

export default Projects;
