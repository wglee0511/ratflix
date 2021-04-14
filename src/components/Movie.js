import React, { useContext } from "react";
import styled from "styled-components";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
import Loader from "./Loader";
import Movies from "./fragment/Movies";
import { Helmet } from "react-helmet";

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

const Movie = (props) => {
  const apiContext = useContext(ApiContext);
  const { now, pop, top, isLoading } = apiContext;

  return (
    <Wrapper>
      <Helmet>
        <title>Movies - Ratflix</title>
      </Helmet>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && (
        <>
          <TitleText>{`${theme.nowContents}`}</TitleText>
          <Movies movieData={now} />

          <TitleText>{`${theme.popContents}`}</TitleText>
          <Movies movieData={pop} />

          <TitleText>{`${theme.topContents}`}</TitleText>
          <Movies movieData={top} />
        </>
      )}
    </Wrapper>
  );
};

export default Movie;
