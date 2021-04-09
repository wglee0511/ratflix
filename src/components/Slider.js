import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";

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
  object-fit: cover;
  background-position: center center;
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
                      }}
                    ></ImageDiv>
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
                    ></ImageDiv>
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
