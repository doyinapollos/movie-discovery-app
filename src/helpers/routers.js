import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NonAuthRoutes } from "./url";
import MovieDetails from "../pages/MovieDetails";
import MobileView from "../pages/MobileView";
//
function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
        <Route path={NonAuthRoutes.moviedetails} element={<MovieDetails />} />{" "}
        <Route path={NonAuthRoutes.mobile} element={<MobileView />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;
