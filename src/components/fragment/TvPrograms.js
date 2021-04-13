import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme.js";

const Movies = styled.div.attrs({
  className: "grid-box",
})`
  display: grid;
  grid-gap: 15px;
`;

const MovieDiv = styled.div`
  width: 100%;
  :hover {
    .score-text {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)``;

const ImageDiv = styled.div`
  height: 20vh;
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const TitleText = styled.h1`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 3vh;
  margin-top: 3vh;
`;

const TittleDiv = styled.div`
  color: ${theme.FontColor};
  margin: 1vh 0 1vh 0;
  font-size: 20px;
  font-weight: 600;
`;

const ScoreDiv = styled.div.attrs({
  className: "score-text",
})`
  color: ${theme.EtcColor};
  font-size: 15px;
  font-weight: 800;
  margin: 0 5px 5px 0;
  display: none;
`;

const TvPrograms = (props) => {
  const tvData = props.tvData;
  console.log(tvData);
  return <div></div>;
};

export default TvPrograms;
