"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const Navbar = () => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    setIsLight((prev) => !prev);
  };

  return (
    <div className="sticky top-0 px-4 sm:px-8 lg:px-12 py-3 flex justify-between text-white bg-[#009485] z-50">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold tracking-wide">Better Algo.</h1>
      </div>
      <div className="flex space-x-8 lg:space-x-14 items-center text-lg lg:text-xl">
        <FaSearch className="cursor-pointer" />
        {isLight ? (
          <FaToggleOff onClick={toggleTheme} className="cursor-pointer" />
        ) : (
          <FaToggleOn onClick={toggleTheme} className="cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
