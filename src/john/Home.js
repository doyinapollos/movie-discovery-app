// import React, { useState, useEffect } from "react";
// import MovieCard from "../components/MovieCard";
// //import { getTopMovies } from "../api";
// import "./Home.css";
// import HomeScreen from "./HomeScreen";

// function Home() {
//   const [topMovies, setTopMovies] = useState([]);
//   useEffect(() => {
//     getTopMovies().then((data) => {
//       setTopMovies(data.results.slice(0, 10));
//     });
//   }, []);
//   return (
//     <div>
//       <div>
//         <HomeScreen />
//       </div>{" "}
//       <div className="home">
//         <div className="home-container">
//           <div className="home_title"> Featured Movies </div>{" "}
//         </div>{" "}
//         <div className="movie-grid">
//           {" "}
//           {topMovies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>
//   );
// }
// export default Home;
