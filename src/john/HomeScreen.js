import React from "react";
import "./HomeScreen.css";
import SearchResults from "./SearchResults";

function HomeScreen() {
  return (
    <div className="background">
      <div className="sidebaricons_title2">
        <img
          className="icon_image2"
          src="https://cdn-icons-png.flaticon.com/128/3759/3759472.png"
          alt=""
        />
        <div className="sidebar_title2"> Movie Box </div>{" "}
        <div className="seach">
          <SearchResults />
        </div>{" "}
      </div>{" "}
      <h1> John Wich 3: Parabellum </h1>{" "}
      <p>
        John Wick is on the run after killing a member of the international
        assassins ' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.{" "}
      </p>{" "}
      <button className="buttn"> WATCH TRAILER </button>{" "}
    </div>
  );
}
export default HomeScreen;
