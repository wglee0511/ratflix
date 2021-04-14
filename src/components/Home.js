import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
import Loader from "./Loader";
import MainMovie from "./MainMovie";
import Slider from "./Slider";

const Wrapper = styled.div.attrs({
  className: "home-wrapper-div",
})`
  width: 100%;
`;

const MainFrameDiv = styled.div``;

const SliderDiv = styled.div`
  color: ${theme.FontColor};
  margin: 3vh 0 3vh 0;
  width: 100%;
`;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})`
  margin-top: 30vh;
`;

const Home = () => {
  const apiContext = useContext(ApiContext);
  const isLoading = apiContext.isLoading;

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
            <MainMovie />
          </MainFrameDiv>
          <SliderDiv>
            <Slider />
          </SliderDiv>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
