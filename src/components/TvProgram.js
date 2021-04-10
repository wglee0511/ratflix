import React, { useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";
import Loader from "./Loader";

const Wrapper = styled.div`
margin: 7vh 10px 10px 10px;
color: ${theme.FontColor};
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


const MovieDiv = styled.div`
width:100%;
:hover {
    .score-text {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`

`;

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

const TittleDiv = styled.div`;
  color: ${theme.FontColor};
  margin: 1vh 0 1vh 0;
  font-size: 20px;
  font-weight: 600;
`;

const ScoreDiv = styled.div.attrs({
  className : "score-text"
})`
color: ${theme.EtcColor};
font-size: 15px;
font-weight: 800;
margin: 0 5px 5px 0;
display: none;
`;

const TvProgram = (props) => {
  const apiContext = useContext(ApiContext);
  const {onAirTv, popTv, topTv, isLoading} = apiContext;
  

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && <>
            <TitleText>{`${theme.nowContents}`}</TitleText>
          <Movies>
         {onAirTv.map(each => {
            const { id, vote_average,name, poster_path } = each;
            const posterUrl = `${apis.baseUrl + poster_path}`;
           return <MovieDiv> 
             <StyledLink key={id} to={`/tv/${id}`}>
               <ImageDiv style={{
                 background: `url(${posterUrl})`,
                 backgroundPosition: "center center",
                 backgroundSize: "cover"
               }}>
               <ScoreDiv>{`${vote_average} / 10.0`}</ScoreDiv>
               </ImageDiv>
               </StyledLink>
           <TittleDiv>{name}</TittleDiv> </MovieDiv>
         })}
            
          </Movies>
          
          <TitleText>{`${theme.popContents}`}</TitleText>
          <Movies>
         {popTv.map(each => {
            const { id, vote_average,name, poster_path } = each;
            const posterUrl = `${apis.baseUrl + poster_path}`;
           return <MovieDiv> 
             <StyledLink key={id} to={`/tv/${id}`}>
               <ImageDiv style={{
                 background: `url(${posterUrl})`,
                 backgroundPosition: "center center",
                 backgroundSize: "cover"
               }}>
               <ScoreDiv>{`${vote_average} / 10.0`}</ScoreDiv>
               </ImageDiv>
               </StyledLink>
           <TittleDiv>{name}</TittleDiv> </MovieDiv>
         })}
            
          </Movies>

          <TitleText>{`${theme.topContents}`}</TitleText>
          <Movies>
         {topTv.map(each => {
            const { id, vote_average,name, poster_path } = each;
            const posterUrl = `${apis.baseUrl + poster_path}`;
           return <MovieDiv> 
             <StyledLink key={id} to={`/tv/${id}`}>
               <ImageDiv style={{
                 background: `url(${posterUrl})`,
                 backgroundPosition: "center center",
                 backgroundSize: "cover"
               }}>
               <ScoreDiv>{`${vote_average} / 10.0`}</ScoreDiv>
               </ImageDiv>
               </StyledLink>
           <TittleDiv>{name}</TittleDiv> </MovieDiv>
         })}
            
          </Movies>
      </>}
    </Wrapper>
  );
};

export default TvProgram;
