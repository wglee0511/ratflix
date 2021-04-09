import React, { useContext} from "react";
import styled from "styled-components";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
import Loader from "./Loader";

const Wrapper = styled.div`
margin: 7vh 10px 10px 0;
color: ${theme.FontColor};
@media screen and (min-width: 480px) {
  .grid-box {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
}

@media screen and (min-width: 640px) {
    .grid-box {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media screen and (min-width: 1060px) {
   .grid-box {
    grid-template-columns: repeat(5, minmax(200px, 1fr));
   }
`;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})`
margin-top: 30vh;
`;
const Movies = styled.div.attrs({
  className: "grid-box"
})`
display: grid;
grid-gap: 15px;

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
