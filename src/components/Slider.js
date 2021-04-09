import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import  theme from "../styles/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MovieWrapper = styled.div`
  height: 20vh;
`;
const TvWrapper = styled.div`
  margin-top: 3vh;
  height: 20vh;
`;

const Tittle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 3vh;
`;
const ImageDiv = styled.div`
  width: 240px;
  height: 130px;
  object-fit: fit;
  :hover {
    .score-text {
      display: block;
    }
  }
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

`;
const RatingScore = styled.div.attrs({
  className: "score-text"
})`
color: ${theme.EtcColor};
font-size: 15px;
font-weight: 800;
margin: 0 5px 5px 0;
display: none;
`;

const StyledLink = styled(Link)``;

const Slider = (props) => {
  const apiContext = useContext(ApiContext);
  const isLoading = apiContext.isLoading;
  const popMovie = apiContext.pop;
  const popTv = apiContext.popTv;

  console.log(popMovie);

  return (
    <Wrapper>
      <MovieWrapper>
        <Tittle>Ratflix 인기 영화 콘텐츠</Tittle>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          breakpoints={
            {
              480: {
                width: 480,
                slidesPerView: 1
              },
              640: {
                width: 640,
                slidesPerView: 2
              },
              800: {
                width: 800,
                slidesPerView: 3
              }
            }
          }

          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {!isLoading &&
            popMovie.map((each) => {
              const { id, vote_average, release_date, poster_path } = each;
              const posterUrl = `${apis.baseUrl + poster_path}`;
              return (
                <SwiperSlide>
                  <StyledLink key={id} to={`/movies/${id}`}>
                    <ImageDiv
                      style={{
                        background: `url(${posterUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                        
                      }}
                    >
                      <RatingScore>
                        {`${vote_average} / 10`}
                        </RatingScore></ImageDiv>
                  </StyledLink>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </MovieWrapper>
      <TvWrapper>
        <Tittle>Ratflix 인기 TV 콘텐츠</Tittle>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          breakpoints={
            {
              480: {
                width: 480,
                slidesPerView: 1
              },
              640: {
                width: 640,
                slidesPerView: 2
              },
              800: {
                width: 800,
                slidesPerView: 3
              }
            }
          }
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
         {!isLoading &&
            popTv.map((each) => {
              const { id, vote_average, release_date, poster_path } = each;
              const posterUrl = `${apis.baseUrl + poster_path}`;
              return (
                <SwiperSlide>
                  <StyledLink key={id} to={`/movies/${id}`}>
                    <ImageDiv
                      style={{
                        background: `url(${posterUrl})`,
                      }}
                    ><RatingScore>
                    {`${vote_average} / 10`}
                    </RatingScore></ImageDiv>
                  </StyledLink>
                </SwiperSlide>
              );
            })}
        </Swiper>
       
      </TvWrapper>
    </Wrapper>
  );
};

export default Slider;
