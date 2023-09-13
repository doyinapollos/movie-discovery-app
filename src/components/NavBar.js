import React, { useState } from "react";
import movieAppLogo from "../assets/svgs/movie-app-logo.svg";
import searchIcon from "../assets/svgs/search-icon.svg";
import menuIcon from "../assets/svgs/menu-icon.svg";

function NavBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-start items-center ">
      <nav className="w-[90%] h-[80px]  p-4 flex justify-between items-center">
        {" "}
        {/* Left Div with Logo */}{" "}
        <div className="flex items-center">
          <img
            src={movieAppLogo}
            alt="Logo"
            className="h-[50px] w-[186px] cursor-pointer "
          />
        </div>
        {/* Middle Div with Search Bar and Icon */}{" "}
        <div className="flex items-center">
          <div className="w-[450px] h-[38px] bg-black opacity-50 border border-solid border-gray-200 flex justify-center items-center rounded-[6px] ">
            <input
              type="text"
              placeholder="Search by movie title"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-[400px] h-[36px] text-white border-none pl-[5px] bg-black opacity-50 "
            />
            <img
              src={searchIcon}
              alt="Logo"
              className="h-[16px] w-[16px] text-gray-700 cursor-pointer "
              onClick={handleSearch}
            />
          </div>{" "}
        </div>
        {/* Right Div with Sign In Text and Menu Icon */}{" "}
        <div className="flex items-center">
          <span className="text-white mr-[20px] "> Sign In </span>{" "}
          <img
            src={menuIcon}
            alt="menuLogo"
            className="h-[36px] w-[36px] cursor-pointer "
          />
        </div>{" "}
      </nav>
    </div>
  );
}

export default NavBar;
