import React from "react";
import movieAppLogo from "../assets/svgs/movie-app-logo.svg";
import searchIcon from "../assets/svgs/search-icon.svg";
import menuIcon from "../assets/svgs/menu-icon.svg";

function NavBar() {
  return (
    <div className="w-full h-auto bg-red-300 flex flex-col justify-start items-center ">
      <nav className="w-[90%] h-[80px]  p-4 flex justify-between items-center">
        {" "}
        {/* Left Div with Logo */}{" "}
        <div className="flex items-center">
          <img src={movieAppLogo} alt="Logo" className="h-[50px] w-[186px] " />
        </div>
        {/* Middle Div with Search Bar and Icon */}{" "}
        <div className="flex items-center">
          <div className="w-[420px] h-[38px] flex justify-center items-center bg-gray-300 rounded-[6px] ">
            <input
              type="text"
              placeholder="Search"
              className="w-[400px] h-[36px] border-none pl-[5px] shadow-md focus:outline-none "
            />
            <img
              src={searchIcon}
              alt="Logo"
              className="h-[16px] w-[16px] text-gray-700 cursor-pointer "
            />
          </div>{" "}
        </div>
        {/* Right Div with Sign In Text and Menu Icon */}{" "}
        <div className="flex items-center">
          <span className="text-white mr-[20px] "> Sign In </span>{" "}
          <img src={menuIcon} alt="Logo" className="h-[36px] w-[36px] " />
        </div>{" "}
      </nav>
    </div>
  );
}

export default NavBar;
