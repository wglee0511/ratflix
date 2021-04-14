import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import theme from "../styles/theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MovieWrapper = styled.div``;
const TvWrapper = styled.div`
  margin-top: 3vh;
`;

const Tittle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 3vh;
`;
const ImageDiv = styled.div.attrs({
  className: "swiper-imagediv",
})`
  height: 240px;
  object-fit: fit;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 8px;

  :hover {
    .score-text {
      display: block;
    }
  }
`;
const RatingScore = styled.div.attrs({
  className: "score-text",
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

  return (
    <Wrapper>
      <MovieWrapper>
        <Tittle>Ratflix 인기 영화 콘텐츠</Tittle>
        <Swiper
          spaceBetween={10}
          breakpoints={{
            480: {
              width: 480,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            1060: {
              width: 1060,
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {!isLoading &&
            popMovie.map((each) => {
              const { id, vote_average, poster_path } = each;
              const posterUrl = `${apis.baseUrl + poster_path}`;
              return (
                <SwiperSlide>
                  <StyledLink key={id} to={`/movies/${id}`}>
                    <ImageDiv
                      style={{
                        background: `url(${posterUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    >
                      <RatingScore>{`${vote_average} / 10`}</RatingScore>
                    </ImageDiv>
                  </StyledLink>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </MovieWrapper>
      <TvWrapper>
        <Tittle>Ratflix 인기 TV 콘텐츠</Tittle>
        <Swiper
          spaceBetween={10}
          breakpoints={{
            480: {
              width: 480,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            1060: {
              width: 1060,
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {!isLoading &&
            popTv.map((each) => {
              const { id, vote_average, poster_path } = each;
              const posterUrl = `${apis.baseUrl + poster_path}`;
              return (
                <SwiperSlide>
                  <StyledLink key={id} to={`/movies/${id}`}>
                    <ImageDiv
                      style={{
                        background: `url(${posterUrl})`,
                      }}
                    >
                      <RatingScore>{`${vote_average} / 10`}</RatingScore>
                    </ImageDiv>
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
