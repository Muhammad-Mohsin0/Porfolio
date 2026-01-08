import React from "react";
import { PiBinoculars, PiRocketLaunch } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const steps = [
  {
    icon: PiBinoculars,
    title: "Concept & Planning",
    description:
      "We’ll start by discussing your vision, goals, and project requirements to ensure we’re aligned.",
    tags: ["Meeting", "Research", "Planning"],
    hovercolor: "#D82B7D",
  },
  {
    icon: BsLaptop,
    title: "World Building & Systems",
    description:
      "I’ll create wireframes and prototypes, refining the design until it meets your expectations.",
    tags: ["UX", "UI", "Prototypes"],
    hovercolor: "#EB5E08",
  },
  {
    icon: FiEdit,
    title: "Optimization & Polish",
    description:
      "You’ll review the design, provide feedback, and we’ll collaborate to make any necessary adjustments.",
    tags: ["Review", "Feedback", "Revisions"],
    hovercolor: "#E22D2D",
  },
  {
    icon: PiRocketLaunch,
    title: "Testing & Launch Ready",
    description:
      "Once the design is finalized, I’ll deliver the files and ensure a smooth launch for your project.",
    tags: ["Finalize", "Delivery", "Launch"],
    hovercolor: "#D4910C",
  },
];

const Experience = () => {
  return (
    <>
      <div className="flex justify-center mt-16 md:mt-20">
        <div className="w-full max-w-6xl px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            4 Simple Steps to Creating High-Quality Game{" "}
            <br className="hidden sm:block" />
            Experiences with Unreal Engine
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-10 md:mt-12">
        <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                style={
                  { "--hover-color": step.hovercolor } as React.CSSProperties
                }
                className="
                  group
                  bg-white rounded-2xl p-6
                  shadow-sm transition-all duration-300
                  hover:shadow-xl
                  hover:bg-[var(--hover-color)]
                "
              >
                <div
                  className="
                    w-16 h-16 flex items-center justify-center
                    rounded-xl bg-gray-100 mb-4
                    transition-colors duration-300
                    group-hover:bg-white/20
                  "
                >
                  <Icon className="text-2xl text-gray-800 group-hover:text-white transition-colors" />
                </div>

                <h1 className="font-semibold text-xl mb-2 text-gray-800 group-hover:text-white transition-colors">
                  {step.title}
                </h1>

                <p className="text-sm my-4 text-gray-600 group-hover:text-white/90 transition-colors">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-gray-100 text-gray-600
                        transition-colors
                        group-hover:bg-white/20
                        group-hover:text-white
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
