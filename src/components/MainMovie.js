import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";

const Wrapper = styled.div.attrs({
  className: "main-wrapper"
})`

  display: flex;
  margin-top: 7vh;
  height: 60vh;
  width: 100%;
  color: ${theme.FontColor};
  padding: 10px 10px 10px 10px;
  border-radius: 5px;

`;
const TextDiv = styled.div.attrs({
  className: "main-textdiv"
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
 
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;
`;

const OverView = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

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
    <Wrapper style={{
      background: `url(${posterUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }} >
      <TextDiv>
        <Title>{title}</Title>

        <TextMiddleDiv>
          <OverView>{overview}</OverView>
        </TextMiddleDiv>

        <TextBottonDiv>
          <StyledLink to={`/movie/${id}`}>상세정보</StyledLink>
          <TextAverage>{vote_average} / 10.0</TextAverage>
        </TextBottonDiv>
      </TextDiv>
    </Wrapper>
  );
};

export default MainMovie;
