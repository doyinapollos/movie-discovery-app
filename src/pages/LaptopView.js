import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imdbLogo from "../assets/svgs/imdb-logo.svg";
import appleLogo from "../assets/svgs/apple-logo.svg";
import platMovieIconRed from "../assets/svgs/play-movie-icon-red.svg";
import arrowRightIcon from "../assets/svgs/arrow-right-icon.svg";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
//import MovieDetails from "./MovieDetails";

const API_KEY = "0f3f507f4d0ec869bbe4f0b31cf16114";
const BASE_URL = "https://api.themoviedb.org/3";

function LaptopView() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API using Axios
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(movies);

  return (
    <div className="w-full h-auto flex flex-col justify-start items-center  ">
      <NavBar />
      <div className="w-full h-[450px] flex flex-col justify-start items-center bg-red-300 ">
        <div className="w-full h-[470px] flex justify-start items-center ">
          <div className="w-[70%] h-full flex flex-col justify-center items-center ">
            <div className="w-[80%] h-[75%] flex flex-col justify-between items-start ">
              <div>
                <p className="font-[700] text-[40px] text-red-400 ">
                  John Wick 3 : <br />
                  Parabellum
                </p>
              </div>
              <div className="w-[200px] h-[20px] flex justify-between items-center ">
                <div className="w-[100px] h-[20px] text-[12px] flex justify-between items-center ">
                  <img
                    src={imdbLogo}
                    alt="Logo"
                    className="h-[60px] w-[35px] "
                  />
                  <p>880/100</p>
                </div>
                <div className="w-[60px] h-[20px] text-[12px] flex justify-between items-center ">
                  <img
                    src={appleLogo}
                    alt="Logo"
                    className="h-[16px] w-[17px] "
                  />
                  <p>97%</p>
                </div>
              </div>
              <div className="w-[303px] h-[73px] ">
                <p className="font-[500] text-[14px] ">
                  John Wick is on the run after killing a member of the
                  international assassins' guild, and with a $14 million price
                  tag on his head, he is the target of hit men and women
                  everywhere.
                </p>
              </div>
              <div class="flex flex-col justify-center items-start py-6">
                <button class="w-[169px] h-[36px] bg-red-600 hover:bg-red-700 rounded-[6px] flex justify-center items-center ">
                  <img
                    src={platMovieIconRed}
                    alt="Watch Icon"
                    class="w-[16px] h-[16px]"
                  />
                  <span class="text-white text-[16px] pl-[7px] ">
                    Watch Thriller
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full flex flex-col justify-center items-center ">
            <div className="w-[80%] h-[25%] flex flex-col justify-between items-end ">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] flex flex-col justify-center items-center bg-[#F8F8FF] ">
        <div className="w-[85%] h-full flex justify-between items-center ">
          <p className="text-[36px] font-[700] text-[#000] ">Featured Movie</p>
          <div className="flex justify-center items-center ">
            <p className="text-[18px] text-[#BE123C] font-[400] ">See more</p>
            <img
              src={arrowRightIcon}
              alt="arror-right"
              className="h-[14px] w-[16px] text-[#BE123C] mt-[4px] ml-[4px] "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center flex-wrap bg-[#F8F8FF]">
        {loading ? (
          // Display a spinner while loading
          <div className="spinner border-t-4 border-blue-500 border-solid h-12 w-12 rounded-full animate-spin"></div>
        ) : (
          // Map through the data and render Card components
          movies.map((item, index) => (
            <Link key={item.id} to={`/movie/${item.id}`}>
              <MovieCard item={item} />
            </Link>

            // <MovieCard key={item.id} item={item}
            // />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default LaptopView;
