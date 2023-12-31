import React from "react";
//import movieCoverImage2 from "../assets/svgs/movie-cover-image-2.svg";
//import starIcon from "../assets/svgs/star-icon.svg";
import imdbLogo from "../assets/svgs/imdb-logo.svg";
import appleLogo from "../assets/svgs/apple-logo.svg";
//import profilePhoto from "../assets/images/image-1.jpg";

const getMovieCoverImage = (posterpath) => {
  return `https://image.tmdb.org/t/p/w500${posterpath}`;
};

function MovieCard({ item }) {
  return (
    <div>
      <div className="w-[250px] h-[370px] m-[10px] cursor-pointer bg-white flex flex-col justify-center items-center ">
        <div className="w-[100%] h-[236px] ">
          <img
            data-testid="movie-poster"
            className="w-[100%] h-[100%] "
            src={getMovieCoverImage(item.poster_path)}
            alt="movieCoverImage"
          />
        </div>
        <div className="w-[95%] h-[18px] text-[12px] my-[5px] text-[#A1A1A1] flex justify-start items-center ">
          <span data-testid="movie-release-date" className="">
            {item.release_date}
          </span>
        </div>
        <div className="w-[95%] h-[46px] text-[16px] my-[5px] font-[700] font-clashDisplay text-[#111827] ">
          {/* <span>Spider - Man: Into The Spider Verse </span> */}
          <span data-testid="movie-title" className="">
            {item.title}
          </span>
        </div>
        <div className="w-[95%] h-[20px] my-[5px] flex justify-between items-center ">
          <div className="w-[100px] h-[20px] text-[12px] flex justify-between items-center ">
            <img src={imdbLogo} alt="imdbLogo" className="h-[60px] w-[35px] " />
            <span> {item.popularity} </span>{" "}
          </div>
          <div className="w-[45px] h-[20px] text-[12px] flex justify-between items-center ">
            <img
              src={appleLogo}
              alt="appleLogo"
              className="h-[16px] w-[17px] "
            />
            <span> {item.vote_average} </span>
          </div>
        </div>
        <div className="w-[95%] h-[20px] text-[12px] 5y-[5px] text-[#9CA3AF] flex justify-start items-center ">
          <span> Animation, Action, Adventure </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
