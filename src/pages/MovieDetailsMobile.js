import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import movieAppLogo from "../assets/svgs/movie-app-logo.svg";
import homeIcon from "../assets/svgs/home-icon.svg";
import movieProjector from "../assets/svgs/movie-projector.svg";
import tvShowIcon from "../assets/svgs/tv-show-icon.svg";
import calendarIcon from "../assets/svgs/calendar-icon.svg";
import logoutIcon from "../assets/svgs/logout-icon.svg";
import playMovieIconWhite from "../assets/svgs/play-movie-icon-white.svg";
import starIcon from "../assets/svgs/star-icon.svg";
import movieTicketsIcon from "../assets/svgs/movie-tickets-icon.svg";
import moreOptionsMenuIcon from "../assets/svgs/more-option-menu-icon.svg";

function MovieDetailsMobile() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  // Function to handle menu item click and update the active state
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    // Fetch movie details using the movie ID from route params
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=0f3f507f4d0ec869bbe4f0b31cf16114`
      )
      .then((response) => {
        setMovie(response.data);
        console.log("fetching movie details:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  if (!movie) {
    return (
      <div className="spinner border-t-4 border-blue-500 border-solid h-12 w-12 rounded-full animate-spin flex justify-center items-center"></div>
    );
  }

  return (
    <div className="w-full h-auto flex justify-center items-start poppins ">
      <div className="w-[20%] h-[100vh] rounded-tr-[30px] border border-solid border-gray-300 bg-white flex flex-col justify-between items-center ">
        <div className="w-[85%] h-[70px] mt-[10px] cursor-pointer rounded-[5px] p-[15px] bg-red-700 bg-opacity-20 flex items-center ">
          <Link to="/">
            {" "}
            <img src={movieAppLogo} alt="Logo" className="h-[50px] w-[60px] " />
          </Link>{" "}
        </div>{" "}
        <div className="w-[85%] h-[30%] text-[600] text-[16px] flex flex-col justify-between items-start ">
          <div className="w-full h-auto flex justify-center items-start ">
            <img
              src={homeIcon}
              alt="homeLogo"
              className="h-[24px] w-[24px] mx-[12px] "
            />
            <span
              className={`cursor-pointer ${
                activeMenuItem === "home" ? "text-[#BE123C]" : ""
              }`}
              onClick={() => handleMenuItemClick("home")}
            >
              <Link to="/"> Home </Link>{" "}
            </span>{" "}
          </div>{" "}
          <div className="w-full h-auto ml-[5px] flex justify-center items-start ">
            <img
              src={movieProjector}
              alt="Logo"
              className="h-[24px] w-[24px] mx-[12px] "
            />
            <span
              className={`cursor-pointer ${
                activeMenuItem === "movie" ? "text-[#BE123C]" : ""
              }`}
              onClick={() => handleMenuItemClick("movie")}
            >
              {" "}
              Movies{" "}
            </span>{" "}
          </div>{" "}
          <div className="w-full h-auto ml-[10px] flex justify-center items-start ">
            <img
              src={tvShowIcon}
              alt="Logo"
              className="h-[24px] w-[24px] mx-[12px] "
            />
            <span
              className={`cursor-pointer ${
                activeMenuItem === "tv series" ? "text-[#BE123C]" : ""
              }`}
              onClick={() => handleMenuItemClick("tv series")}
            >
              {" "}
              TV Series{" "}
            </span>{" "}
          </div>{" "}
          <div className="w-full h-auto ml-[14px] flex justify-center items-start ">
            <img
              src={calendarIcon}
              alt="Logo"
              className="h-[24px] w-[24px] mx-[12px] "
            />
            <span
              className={`cursor-pointer ${
                activeMenuItem === "Upcoming" ? "text-[#BE123C]" : ""
              }`}
              onClick={() => handleMenuItemClick("Upcoming")}
            >
              {" "}
              Upcoming{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[170px] h-[200px] py-[15px] rounded-[20px] bg-[#F8E7EB] flex flex-col justify-between items-center ">
          <p className="text-[15px] font-[600] text-[#333333] ">
            Play movie quizes <br /> and earn <br /> free tickets{" "}
          </p>{" "}
          <p className="text-[12px] text-[#666666] font-[500] ">
            50 k people are playing <br /> now{" "}
          </p>{" "}
          <button class="w-[113px] h-[30px] border border-solid border-[#BE123C] bg-[#F8E7EB] hover:bg-red-700 rounded-[30px] flex justify-center items-center ">
            <span class="text-[#BE123C] text-[12px] font-[500] pl-[7px] ">
              Start playing{" "}
            </span>{" "}
          </button>{" "}
        </div>{" "}
        <div className="w-[85%] h-[50px] flex justify-center items-start ">
          <img
            src={logoutIcon}
            alt="Logo"
            className="h-[24px] w-[24px] mx-[12px] "
          />
          <span className="cursor-pointer"> Logout </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-[80%] h-[100vh] flex flex-col justify-start items-center ">
        <div className="w-[95%] h-[300px] bg-image2 bg-opacity-50 rounded-[30px] mt-[15px] flex flex-col justify-center items-center ">
          <div>
            <img
              src={playMovieIconWhite}
              alt="homeLogo"
              className="h-[24px] w-[24px] mx-[12px] "
            />
          </div>{" "}
          <span className="text-white font-[600] "> Watch Trailer </span>{" "}
        </div>{" "}
        <div className="w-[95%] h-[50px] my-[10px] flex justify-between items-center ">
          <div className="w-[65%] h-[50px] flex justify-start items-center ">
            <span> Top Gun: Maverick.2022.PG - 13.2 h 10 m </span>{" "}
            <button class="w-[80px] h-[30px] mx-[7px] border border-solid border-[#BE123C] bg-white hover:bg-gray-700 rounded-[30px] flex justify-center items-center ">
              <span class="text-[#BE123C] text-[12px] font-[500] pl-[7px] ">
                Action{" "}
              </span>{" "}
            </button>{" "}
            <button class="w-[80px] h-[30px] border border-solid border-[#BE123C] bg-white hover:bg-gray-700 rounded-[30px] flex justify-center items-center ">
              <span class="text-[#BE123C] text-[12px] font-[500] pl-[7px] ">
                Drama{" "}
              </span>{" "}
            </button>{" "}
          </div>{" "}
          <div className="w-[10%] h-full flex justify-center items-center ">
            <img
              src={starIcon}
              alt="starIcon"
              className="h-[24px] w-[19px] pr-[3px] "
            />
            <span> 8.5 </span>{" "}
            <span className="pl-[3px] ml-[3px] border-l border-solid border-gray ">
              350 k{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[95%] h-[90px] flex justify-between items-center ">
          <div className=" w-[100%] h-full flex justify-between items-center ">
            <div className="w-[75%] h-full  font-[400] flex justify-start items-start ">
              <p className="text-[14px]  ">
                <span className="font-[600] "> Overview: </span>{" "}
                <span className="" data-testid="movie-overview">
                  {" "}
                  {movie.overview}{" "}
                </span>{" "}
              </p>{" "}
            </div>{" "}
            <div className="w-[25%] h-full flex flex-col justify-center items-end ">
              <button class="w-[220px] h-[30px] mx-[7px] mb-[10px] border border-solid border-[#BE123C] bg-[#BE123C] hover:bg-red-700 rounded-[5px] flex justify-center items-center ">
                <img
                  src={movieTicketsIcon}
                  alt="homeLogo"
                  className="h-[24px] w-[19px] mx-[12px] "
                />
                <span class="text-white text-[12px] font-[500] pl-[7px] ">
                  See Showtimes{" "}
                </span>{" "}
              </button>{" "}
              <button class="w-[220px] h-[30px] mx-[7px] border border-solid border-[#BE123C] bg-[#F8E7EB] hover:bg-red-700 rounded-[5px] flex justify-center items-center ">
                <img
                  src={moreOptionsMenuIcon}
                  alt="homeLogo"
                  className="h-[24px] w-[19px] mx-[12px] "
                />
                <span class="text-[#BE123C] text-[12px] font-[500] pl-[7px] ">
                  More watch options{" "}
                </span>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[95%] h-[130px] mt-[10px] border-t border-solid border-gray flex justify-between items-center ">
          <div className="w-[75%] h-full text-[12px] flex flex-col justify-between items-start ">
            <p>
              Original title:{" "}
              <span className="" data-testid="movie-title">
                {" "}
                {movie.title}{" "}
              </span>{" "}
            </p>{" "}
            <p>
              Realeased date:
              <span className="" data-testid="movie-release-date">
                {" "}
                {movie.release_date}{" "}
              </span>{" "}
            </p>{" "}
            <p>
              Vote count:
              <span className="" data-testid="movie-runtime">
                {" "}
                {movie.vote_count}{" "}
              </span>{" "}
            </p>{" "}
            <div className="w-[90%] h-[40px] border border-solid border-[#C7C7C7] flex justify-start items-center ">
              <button class="w-[230px] h-[40px] border border-solid border-[#BE123C] bg-[#BE123C] hover:bg-red-700 rounded-[5px] flex justify-center items-center ">
                <span class="text-white text-[12px] font-[500] pl-[7px] ">
                  Top rated movies #65
                </span>
              </button>
              <div className="">
                <select
                  id="mySelect"
                  className="w-[430px] p-[7px] border shadow-md focus:ring focus:ring-blue-300"
                >
                  <option value="option1"> Awards 9 nominations </option>{" "}
                  <option value="option2"> Option 2 </option>{" "}
                  <option value="option3"> Option 3 </option>{" "}
                </select>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[25%] h-full flex flex-col justify-center items-center ">
            <div className="w-full h-full flex justify-center items-center ">
              <div className="flex justify-center items-center ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Logo"
                  className="h-full w-full "
                />
              </div>{" "}
              <div className="border-l border-r border-white ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Logo"
                  className="h-full w-full "
                />
              </div>{" "}
              <div className=" ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Logo"
                  className="h-full w-full "
                />
              </div>{" "}
            </div>{" "}
            <div className="w-[100%] h-[30px] ">
              <button class="w-[100%] h-[30px] border border-solid border-gray-900 bg-gray-700 bg-opacity-50 hover:bg-red-700 rounded-[4px] flex justify-center items-center ">
                <img
                  src={moreOptionsMenuIcon}
                  alt="homeLogo"
                  className="h-[24px] w-[19px] mx-[7px] "
                />
                <span class="text-white text-[10px] font-[500] ">
                  The best Movies and Shows in September{" "}
                </span>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default MovieDetailsMobile;
