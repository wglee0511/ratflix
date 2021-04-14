import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useRouteMatch } from "react-router";
import styled from "styled-components";
import apis from "../apis/api";
import theme from "../styles/theme";
import Movies from "./fragment/Movies";
import TvPrograms from "./fragment/TvPrograms";
import Loader from "./Loader";

const Wrapper = styled.div`
  margin: 8vh 10px 10px 10px;
  color: ${theme.FontColor};
`;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})`
  margin-top: 30vh;
`;
const TitleText = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 3vh;
  margin-top: 3vh;
`;

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const match = useRouteMatch();
  const keyword = match.params.keyword;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const movieSearch = await apis.search.getSearchMovie(keyword);
        const tvSearch = await apis.search.getSearchProgram(keyword);
        const movieResults = movieSearch.data.results;
        const tvResults = tvSearch.data.results;
        setMovieData(movieResults);
        setTvData(tvResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      {isLoading && (
        <>
          <Helmet>
            <title>Loading</title>
          </Helmet>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </>
      )}
      <Helmet>
        <title>{`${keyword}`} - Ratflix</title>
      </Helmet>
      {!isLoading && (
        <>
          <TitleText>{`${keyword} : 영화 검색 결과`}</TitleText>
          <Movies movieData={movieData} />
        </>
      )}
      {!isLoading && (
        <>
          <TitleText>{`${keyword} : TV프로그램 검색 결과`}</TitleText>
          <TvPrograms tvData={tvData} />
        </>
      )}
    </Wrapper>
  );
};

export default Search;
