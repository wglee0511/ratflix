import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b5e85de9c4ef4fd54037405bf63ab4d7",
    language: "ko-KR",
  },
});

const getNowPlayMovies = api.get("movie/now_playing/");
const getPopMovies = api.get("movie/popular/");

const apis = {
  getNowPlayMovies,
  getPopMovies,
};

export default apis;
