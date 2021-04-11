import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "b5e85de9c4ef4fd54037405bf63ab4d7",
    language: "ko-KR",
  },
});

const seachForApi = (keyword) =>
  axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "b5e85de9c4ef4fd54037405bf63ab4d7",
      language: "ko-KR",
      query: `${keyword}`,
    },
  });

const getNowPlayMovies = api.get("movie/now_playing/");
const getPopMovies = api.get("movie/popular/");
const getTopRatedMovies = api.get("movie/top_rated/");
const getDetailMovie = (movie_id) => api.get(`movie/${movie_id}`);
const getVideoMovie = (movie_id) => api.get(`movie/${movie_id}/videos`);


const getOnTheAirPrograms = api.get("tv/on_the_air/");
const getPopPrograms = api.get("tv/popular/");
const getTopRatedPrograms = api.get("tv/top_rated/");
const getDetailPrograms = (tv_id) => api.get(`tv/${tv_id}`);
const getVideoTV = (tv_id) => api.get(`tv/${tv_id}/videos`);

const getSearchMovie = (keyword) => seachForApi(keyword).get("search/movie");
const getSearchProgram = (keyword) => seachForApi(keyword).get("search/tv");

const apis = {
  movies: { 
    getNowPlayMovies, 
    getPopMovies, 
    getTopRatedMovies, 
    getDetailMovie,
    getVideoMovie 
  },
  tvprograms: {
    getOnTheAirPrograms,
    getPopPrograms,
    getTopRatedPrograms,
    getDetailPrograms,
    getVideoTV
  },
  search: {
    getSearchMovie,
    getSearchProgram,
  },
  baseUrl: "https://image.tmdb.org/t/p/w500",
  youtubeUrl : "https://www.youtube.com/watch?v="
};

export default apis;
