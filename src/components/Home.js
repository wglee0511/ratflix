import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import theme from "../styles/theme";
import Loader from "./Loader";
import MainMovie from "./MainMovie";
import Slider from "./Slider";

const Wrapper = styled.div`
  margin-left: 25px;
`;

const MainFrameDiv = styled.div``;

const SliderDiv = styled.div`
  color: ${theme.FontColor};
`;

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

        setMovies({ ...movieData });
        setPrograms({ ...programData });
        setFirstMovie({
          id: movieData[0].id,
          overview: movieData[0].overview,
          poster_path: movieData[0].poster_path,
          title: movieData[0].title,
          vote_average: movieData[0].vote_average,
        });

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(movies);
  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && (
        <>
          <MainFrameDiv>
            <MainMovie firstMovie={firstMovie} />
          </MainFrameDiv>
          <SliderDiv>
            <Slider TvPrograms={programs} />
          </SliderDiv>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
