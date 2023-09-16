import axios from "axios";

const TMDB_API_KEY = "15e44a544141d7c1a63d83c696a3d8c9";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getTopMovies = async () => {
  return await api.get("/movie/top_rated").then((res) => res.data);
};
const getMovieDetails = async (movieId) => {
  return await api.get(`/movie/${movieId}`);
};

export { api, getTopMovies, getMovieDetails };
