import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../../apis/api.js";
import theme from "../../styles/theme.js";

const MoviesDiv = styled.div.attrs({
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
  if (tvData.length !== 0) {
    return (
      <MoviesDiv>
        {tvData.map((each) => {
          const { id, vote_average, name, poster_path } = each;
          const posterUrl = `${apis.baseUrl + poster_path}`;
          return (
            <MovieDiv>
              <StyledLink key={id} to={`/tv/${id}`}>
                <ImageDiv
                  style={{
                    background: `url(${posterUrl})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <ScoreDiv>{`${vote_average} / 10.0`}</ScoreDiv>
                </ImageDiv>
              </StyledLink>
              <TittleDiv>{name}</TittleDiv>{" "}
            </MovieDiv>
          );
        })}
      </MoviesDiv>
    );
  } else if (tvData.length === 0) {
    return <TittleDiv>검색결과가 없습니다.</TittleDiv>;
  }
};

export default TvPrograms;
