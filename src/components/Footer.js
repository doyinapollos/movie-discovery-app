import React from "react";
import faceBookIcon from "../assets/svgs/facebook-icon.svg";
import instagramIcon from "../assets/svgs/instagram-icon.svg";
import twitterIcon from "../assets/svgs/twitter-icon.svg";
import youtubeIcon from "../assets/svgs/youtube-icon.svg";

function Footer() {
  return (
    <div className="w-full h-[250px] flex flex-col justify-center items-center bg-[#F8F8FF] ">
      <div className="w-[492px] h-[140px] flex flex-col justify-between items-center bg-white ">
        <div className="w-[55%] h-[25%] flex justify-between items-center ">
          <img src={faceBookIcon} alt="Logo" className="h-[24px] w-[24px] " />
          <img src={instagramIcon} alt="Logo" className="h-[24px] w-[24px] " />
          <img src={twitterIcon} alt="Logo" className="h-[24px] w-[19px] " />
          <img src={youtubeIcon} alt="Logo" className="h-[23px] w-[16px] " />
        </div>{" "}
        <div className="w-[90%] h-[25%] text-[18px] font-[700] text-[#111827] flex justify-between items-center ">
          <span> Conditions of Use </span> <span> Privacy & Policy </span>{" "}
          <span> Press Room </span>{" "}
        </div>{" "}
        <div className="text-[18px] text-[#6B7280] ">
          <span> ©2021 MovieBox by Adriana Eka Prayudha </span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Footer;
