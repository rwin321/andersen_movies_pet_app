import axios from "axios";

const apiKEY = "daed49d6ec4e1bc804725db7c40854b7";
const URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: URL,
});

export const getSearchMovies = (query) => {
  return instance
    .get(`search/movie?api_key=${apiKEY}&lang=en-US&query=${query}`)
    .then((res) => res.data);
};

export const getLatestMovies = () => {
  return instance
    .get(`movie/popular?api_key=${apiKEY}&language=en-US&page=1`)
    .then((res) => res.data);
};
