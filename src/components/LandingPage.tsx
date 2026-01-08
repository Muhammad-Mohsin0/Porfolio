import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

import { Image } from "../assets/data";

const LandingPage = () => {
  return (
    <div id="home" className="px-6 md:px-12 py-28">
      <div className="flex flex-col-reverse justify-evenly md:flex-row gap-12 items-center">
        <div className="max-w-xl mt-4 text-center md:text-left">
           <div className="inline-flex items-center gap-2 py-1 px-4 rounded-3xl bg-slate-200 mb-6">
        <span className="bg-green-500 w-2 h-2 rounded-full"></span>
        <h1 className="text-sm font-medium text-slate-700">
          Available for new projects
        </h1>
      </div>
          <h1 className="flex items-center justify-center md:justify-start text-4xl md:text-5xl font-bold text-slate-900">
            Muhammad Mohsin
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[38px] h-[38px] ml-2"
            >
              {/* SVG PATHS — UNTOUCHED */}
              <path
                d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                fill="#EBA352"
              ></path>
              <path
                d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                fill="#EBA352"
              ></path>
              <path
                d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                fill="#EBA352"
              ></path>
              <path
                d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                fill="#EBA352"
              ></path>
              <path
                d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                fill="#EBA352"
              ></path>
            </svg>
          </h1>

          <h3
            className="
              relative mt-4 pl-[5.4rem] text-lg font-normal text-slate-700
              before:content-['']
              before:absolute
              before:left-0
              before:top-[1rem]
              before:w-[70px]
              before:h-px
              before:bg-slate-700
            "
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "Graphic Designer",
                "Blockchain Enthusiast",
                "Open Source Contributor",
                "Friend",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          <p className="my-8 leading-relaxed text-slate-600">
            With a passion for blending creativity and functionality, I
            specialize in designing intuitive user experiences that captivate
            audiences and elevate brand presence. Let’s collaborate to bring
            your vision to life!
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="flex items-center text-lg bg-black text-white rounded-3xl py-3 px-6 hover:scale-105 transition">
              Hire Me Now
              <BsFillArrowUpRightCircleFill className="ml-2 w-7 h-7" />
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-10">
            <FaInstagram className="w-6 h-6 text-slate-700 cursor-pointer hover:text-black transition-colors" />
            <FaLinkedinIn className="w-6 h-6 text-slate-700 cursor-pointer hover:text-black transition-colors" />
            <FaEnvelope className="w-6 h-6 text-slate-700 cursor-pointer hover:text-black transition-colors" />
            <FaGithub className="w-6 h-6 text-slate-700 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>

        <div className="flex justify-center w-full md:w-auto">
          <div
            className="profile-img"
            style={{ backgroundImage: `url(${Image})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
