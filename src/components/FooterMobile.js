import React from "react";
import faceBookIcon from "../assets/svgs/facebook-icon.svg";
import instagramIcon from "../assets/svgs/instagram-icon.svg";
import twitterIcon from "../assets/svgs/twitter-icon.svg";
import youtubeIcon from "../assets/svgs/youtube-icon.svg";

function FooterMobile() {
  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[#F8F8FF] ">
      <div className="w-[90%] h-[100px] flex flex-col justify-between items-center bg-white ">
        <div className="w-[55%] h-[25%] flex justify-between items-center ">
          <img src={faceBookIcon} alt="Logo" className="h-[20px] w-[20px] " />
          <img src={instagramIcon} alt="Logo" className="h-[20px] w-[20px] " />
          <img src={twitterIcon} alt="Logo" className="h-[20px] w-[16px] " />
          <img src={youtubeIcon} alt="Logo" className="h-[19px] w-[13px] " />
        </div>{" "}
        <div className="w-[90%] h-[25%] text-[14px] font-[500] text-[#111827] flex justify-center items-center ">
          <span> Conditions of Use </span> <span> Privacy & Policy </span>{" "}
          <span> Press Room </span>{" "}
        </div>{" "}
        <div className="text-[12px] text-[#6B7280] ">
          <span> ©2021 MovieBox by Adriana Eka Prayudha </span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default FooterMobile;
