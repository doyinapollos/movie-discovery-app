import React from "react";
import LaptopView from "./LaptopView";
import MobileView from "./MobileView";

function Home() {
  return (
    <div>
      <div className="hidden md:block lg:block ">
        <LaptopView />
      </div>{" "}
      <div className="md:hidden lg:hidden ">
        <MobileView />
      </div>{" "}
    </div>
  );
}

export default Home;
