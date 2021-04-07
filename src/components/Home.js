import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";
import MainMovie from "./MainMovie";

const Wrapper = styled.div``;

const MainFrameDiv = styled.div``;

const TvGridDiv = styled.div``;

const MovieGridDiv = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})`
  margin-top: 30vh;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState({});
  const [programs, setPrograms] = useState({});
  const [firstMovie, setFirstMovie] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const apiMovieData = await apis.movies.getNowPlayMovies;
        const movieData = apiMovieData.data.results;

        const apiProgramData = await apis.tvprograms.getOnTheAirPrograms;
        const programData = apiProgramData.data.results;

        setMovies(movieData);
        setPrograms(programData);
        setFirstMovie({
          id: movieData[0].id,
          overview: movieData[0].overview,
          poster_path: movieData[0].poster_path,
          title: movieData[0].title,
          vote_average: movieData[0].vote_average,
        });
        console.log(movies);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && (
        <MainFrameDiv>
          <MainMovie firstMovie={firstMovie} />
        </MainFrameDiv>
      )}
    </Wrapper>
  );
};

export default Home;
