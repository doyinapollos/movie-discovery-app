import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="insidebar">
        <div className="sidebaricons_title">
          <img
            className="icon_image"
            src="https://cdn-icons-png.flaticon.com/128/3759/3759472.png"
            alt=""
          />
          <div className="sidebar_title">Movie Box </div>{" "}
        </div>{" "}
        <div className="sidebaricons_title">
          <img
            className="icon_image"
            src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"
            alt=""
          />
          <div className="sidebar_title">Home </div>{" "}
        </div>{" "}
        <div className="sidebaricons_title">
          <img
            className="icon_image"
            src="https://cdn-icons-png.flaticon.com/128/2699/2699194.png"
            alt=""
          />
          <div className="sidebar_title">Movies </div>{" "}
        </div>{" "}
        <div className="sidebaricons_title">
          <img
            className="icon_image"
            src="https://cdn-icons-png.flaticon.com/128/11886/11886464.png"
            alt=""
          />
          <div className="sidebar_title">Tv Series </div>{" "}
        </div>{" "}
        <div className="sidebaricons_title">
          <img
            className="icon_image"
            src="https://cdn-icons-png.flaticon.com/128/6606/6606434.png"
            alt=""
          />
          <div className="sidebar_title">Upcoming </div>{" "}
        </div>{" "}
        <div className="inside_box">
          <div className="insidedive_title">
            Play movie quizes and earn free tickets{" "}
          </div>{" "}
          <div>50 k people are playing now </div>{" "}
          <button className="insidediv_button"> start playing </button>{" "}
        </div>{" "}
        <div className="sidebaricons_title">
          <img
            className="icon_image"
            src="https://cdn-icons-png.flaticon.com/128/992/992680.png"
            alt=""
          />
          <div className="sidebar_title">Log Out </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default SideBar;
