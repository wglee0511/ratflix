import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../../apis/api";
import theme from "../../styles/theme";

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

const Movies = (props) => {
  const { movieData } = props;

  if (movieData.length !== 0) {
    return (
      <MoviesDiv>
        {movieData?.map((each) => {
          const { id, vote_average, title, poster_path } = each;
          const posterUrl = `${apis.baseUrl + poster_path}`;
          return (
            <MovieDiv>
              <StyledLink key={id} to={`/movies/${id}`}>
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
              <TittleDiv>{title}</TittleDiv>{" "}
            </MovieDiv>
          );
        })}
      </MoviesDiv>
    );
  } else if (movieData.length === 0) {
    return <TittleDiv>검색결과가 없습니다.</TittleDiv>;
  }
};

export default Movies;
