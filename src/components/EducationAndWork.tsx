import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
const EducationAndWork = () => {
  const education = [
    {
      date: "01/2019 – 12/2020",
      title: "Master's In Computer Science",
      sub: "National University Of Computer And Emerging Sciences",
      barcolor: "#2B70FA",
    },
    {
      date: "02/2013 – 10/2018",
      title: "Bachelor Of Computer Science",
      sub: "University Of Management And Technology",
      barcolor: "#14A194",
    },
  ];

  const experience = [
    {
      date: "07/2024 – 10/2025",
      title: "3D Modeller And Game Asset Artist",
      sub: "Creative Code Tech | Remote",
      barcolor: "#D82B7D",
    },
    {
      date: "07/2023 – 06/2024",
      title: "3D Modeler And Unreal Engine Artist",
      sub: "Evolve Innovative Solution",
      barcolor: "#EB5E08",
    },
    {
      date: "01/2022 – 06/2023",
      title: "3D Designer For Game Assets",
      sub: "Cresset Technologies",
      barcolor: "#E22D2D",
    },
    {
      date: "01/2020 – 12/2021",
      title: "3D Animator And Rigger",
      sub: "Ping Technologies",
      barcolor: "#D4910C",
    },
  ];
  return (
    <div className="w-full px-4 py-10 md:px-10 lg:px-20 bg-white">
      <div className="flex flex-col items-center md:items-start mb-10 text-center md:text-left">
        <h1 className="text-lg md:text-xl font-semibold text-gray-500 uppercase tracking-wide">
          Education & Work
        </h1>
        <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          My Academic And Professional Journey
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 justify-center items-start">
        <div className="bg-[#F9F9F9] rounded-3xl p-6 md:p-8 w-full lg:max-w-[500px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-3 rounded-full text-black shadow-sm">
              <FaGraduationCap size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-5 border-l-4 rounded-r-xl bg-white shadow-sm py-5 pr-4 transition-transform hover:scale-[1.02] rounded-2xl"
                style={{ borderColor: item.barcolor }}
              >
                <p className="text-gray-400 text-xs md:text-sm font-semibold">
                  {item.date}
                </p>
                <h3 className="text-md md:text-lg font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F9F9F9] rounded-3xl p-6 md:p-8 w-full lg:max-w-[500px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-3 rounded-full text-black shadow-sm">
              <FaBriefcase size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-5 border-l-4 rounded-r-xl bg-white shadow-sm py-5 pr-4 transition-transform hover:scale-[1.02] rounded-2xl"
                style={{ borderColor: item.barcolor }}
              >
                <p className="text-gray-400 text-xs md:text-sm font-semibold">
                  {item.date}
                </p>
                <h3 className="text-md md:text-lg font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndWork;
