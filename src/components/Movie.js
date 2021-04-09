import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
import Loader from "./Loader";

const Wrapper = styled.div`
margin: 7vh 10px 10px 0;
color: ${theme.FontColor};`;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})`
margin-top: 30vh;
`;
const Movies = styled.div`
display: grid;

`;


const MovieBox = styled.div`
background-color: ${theme.FontColor};
`;



const TitleText = styled.h1``;


const Movie = (props) => {
  const apiContext = useContext(ApiContext);
  const {now, pop, top, isLoading} = apiContext;
  console.log(top);

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && <>
            <TitleText>Now</TitleText>
          <Movies>
            <MovieBox>12313</MovieBox>
            <MovieBox>12313</MovieBox>
            <MovieBox>12313</MovieBox>
            <MovieBox>12313</MovieBox>
            <MovieBox>12313</MovieBox>
            <MovieBox>12313</MovieBox>
          </Movies>
            <TitleText>Pop</TitleText>
          <Movies>ddd
          </Movies>
            <TitleText>Top</TitleText>
          <Movies>ddd
          </Movies>
      </>}
    </Wrapper>
  );
};

export default Movie;
