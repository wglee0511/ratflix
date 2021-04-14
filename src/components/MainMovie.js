import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";

const Wrapper = styled.div.attrs({
  className: "main-wrapper",
})`
  margin-top: 7vh;
  height: 60vh;
  width: 100%;
  color: ${theme.FontColor};
  border-radius: 5px;
`;

const BackgroundLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  padding: 10px 10px 10px 10px;
`;

const TextDiv = styled.div.attrs({
  className: "main-textdiv",
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.h1.attrs({ className: "home-maiv-tittle" })``;

const OverView = styled.h3.attrs({ className: "home-main-over" })``;

const TextMiddleDiv = styled.div``;

const TextBottonDiv = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const TextAverage = styled.div`
  font-size: 30px;
  color: ${theme.EtcColor};
  padding: 15px 20px 15px 20px;
`;

const StyledLink = styled(Link)`
  background-color: ${theme.ButtonColor};
  padding: 15px 20px 15px 20px;
  border-radius: 10px;
`;

const MainMovie = () => {
  const apiContext = useContext(ApiContext);
  const movieData = apiContext.firstMovie;
  const { id, overview, poster_path, title, vote_average } = movieData;
  const posterUrl = `${apis.baseUrl}${poster_path}`;

  return (
    <Wrapper
      style={{
        background: `url(${posterUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <BackgroundLayer>
        <TextDiv>
          <Title>{title}</Title>

          <TextMiddleDiv>
            <OverView>{overview}</OverView>
          </TextMiddleDiv>

          <TextBottonDiv>
            <StyledLink to={`/movies/${id}`}>상세정보</StyledLink>
            <TextAverage>{vote_average} / 10.0</TextAverage>
          </TextBottonDiv>
        </TextDiv>
      </BackgroundLayer>
    </Wrapper>
  );
};

export default MainMovie;
