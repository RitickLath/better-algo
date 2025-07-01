"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    if (isLight) {
      document.documentElement.setAttribute("data-color-mode", "dark");
    } else {
      document.documentElement.setAttribute("data-color-mode", "light");
    }

    setIsLight((prev) => !prev);
  };

  return (
    <div className="sticky border-b-[1px] border-[#3C3C3C] top-0 px-4 sm:px-8 lg:px-12 py-3 flex justify-between text-white bg-[#1F1F1F] z-50">
      <div className="flex items-center space-x-4">
        <GiHamburgerMenu
          onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
          className="text-white lg:hidden"
        />
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
