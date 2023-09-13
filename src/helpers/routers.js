import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NonAuthRoutes } from "./url";
import MovieDetails from "../pages/MovieDetails";

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
        <Route path={NonAuthRoutes.moviedetails} element={<MovieDetails />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;
