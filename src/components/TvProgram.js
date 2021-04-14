import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
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

const TvProgram = (props) => {
  const apiContext = useContext(ApiContext);
  const { onAirTv, popTv, topTv, isLoading } = apiContext;

  return (
    <Wrapper>
      <Helmet>
        <title>TV programs - Ratflix</title>
      </Helmet>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && (
        <>
          <TitleText>{`${theme.nowContents}`}</TitleText>
          <TvPrograms tvData={onAirTv} />

          <TitleText>{`${theme.popContents}`}</TitleText>
          <TvPrograms tvData={popTv} />

          <TitleText>{`${theme.topContents}`}</TitleText>
          <TvPrograms tvData={topTv} />
        </>
      )}
    </Wrapper>
  );
};

export default TvProgram;
