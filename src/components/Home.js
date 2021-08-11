import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
import Loader from "./Loader";
import MainMovie from "./MainMovie";
import MetaScript from "./MetaSctipt";
import Slider from "./Slider";

const Wrapper = styled.div.attrs({
  className: "home-wrapper-div",
})`
  width: 100%;
`;

const MainFrameDiv = styled.div``;

const SliderDiv = styled.div`
  color: ${theme.FontColor};
  margin: 50px 10px 50px 10px;
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
      <MetaScript />
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
