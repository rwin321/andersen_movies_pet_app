import axios from "axios";

const URL =
  "https://api.themoviedb.org/3/trending/all/week?api_key=cd524ad267ee1be15d8602d5d5bdecad";

const instance = axios.create({
  baseURL: URL,
});

// fetch movies from api
export const getMovies = () => {
  return instance.get().then((res) => res.data);
};
