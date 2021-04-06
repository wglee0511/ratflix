import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [program, setProgram] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const apiMovieData = await apis.movies.getNowPlayMovies;
        const movieData = apiMovieData.data.results;

        const apiProgramData = await apis.tvprograms.getOnTheAirPrograms;
        const programData = apiProgramData.data.results;

        setMovie(movieData);
        setProgram(programData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(movie);

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && <div>Home</div>}
    </Wrapper>
  );
};

export default Home;
