import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const Movie = (props) => {
  const [nowMovie, setNowMovie] = useState({});
  const [popMovies, setPopMovies] = useState({});
  const [topMovies, setTopMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await apis.getNowPlayMovies
        .then((res) => {
          const nowMovieApiData = res.data.results;
          setNowMovie(nowMovieApiData);
        })
        .catch((error) => console.error(error));

      await apis.getPopMovies
        .then((res) => {
          const popMovieData = res.data.results;
          setPopMovies(popMovieData);
        })
        .catch((error) => console.error(error));

      await apis.getTopRatedMovies
        .then((res) => {
          const topMovieData = res.data.results;
          setTopMovies(topMovieData);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  console.log(nowMovie, popMovies, topMovies);

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && <div>Movies</div>}
    </Wrapper>
  );
};

export default Movie;
