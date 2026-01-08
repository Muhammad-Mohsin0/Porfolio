import { useState } from "react";
import { Logo } from "../assets/data";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };


  return (
    <nav className="w-full h-16 px-6 md:px-32 flex items-center justify-between bg-white fixed top-0 left-0 z-50">
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => scrollToSection("home")}
        />
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 text-lg font-medium">
        <li
          onClick={() => scrollToSection("home")}
          className="hover:text-gray-400 hover:underline cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection("work")}
          className="hover:text-gray-400 hover:underline cursor-pointer"
        >
          Works
        </li>
        <li
          onClick={() => scrollToSection("projects")}
          className="hover:text-gray-400 hover:underline cursor-pointer"
        >
          Projects
        </li>
      </ul>

      {/* DESKTOP BUTTON */}
      <div className="hidden md:block">
        <button className="px-5 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-700 transition">
          Let's Talk
        </button>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        className="md:hidden text-3xl text-gray-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-700">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-black cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("work")}
            className="hover:text-black cursor-pointer"
          >
            Works
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-black cursor-pointer"
          >
            Projects
          </li>

          <button className="mt-2 px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-700 transition">
            Let's Talk
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
