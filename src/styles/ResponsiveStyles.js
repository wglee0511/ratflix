import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .swiper-container {
    width: 100%;
  }

  @media (min-width: 100px) {
    .grid-box {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
    .grid-box-seaaon {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
    }

    .detail-layout-div {
      flex-direction: column;
    }
    .detail-poster-div {
      padding: 0 0 0 0;
      width: 90%;
    }
    .detail-contents-div {
      padding: 0 0 0 0;
      width: 90%;
      margin-bottom: 100px;
    }
    .home-maiv-tittle {
      font-size: 50px;
      font-weight: 800;
    }
    .home-main-over {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }
  .swiper-imagediv {
    width: 480px;
    height: 300px;
  }

  @media (min-width: 640px) {
    .grid-box {
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }
    .grid-box-seaaon {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }

    .swiper-imagediv {
      width: 310px;
    }
    .detail-layout-div {
      flex-direction: column;
    }
    .detail-poster-div {
      padding: 0 0 0 0;
      width: 80%;
    }
    .detail-contents-div {
      padding: 0 0 0 0;
      width: 80%;
      margin-bottom: 100px;
    }
    .home-maiv-tittle {
      font-size: 60px;
      font-weight: 800;
    }
    .home-main-over {
      font-size: 25px;
      font-weight: 400;
      line-height: 30px;
    }
  }
  @media (min-width: 1000px) {
    .grid-box {
      grid-template-columns: repeat(5, minmax(200px, 1fr));
    }
    .grid-box-seaaon {
      grid-template-columns: repeat(4, minmax(200px, 1fr));
    }

    .swiper-imagediv {
      width: 350px;
    }
    .detail-layout-div {
      flex-direction: row;
    }
    .detail-poster-div {
      padding: 5vh 25px 10vh 0;
      width: 40%;
    }
    .detail-contents-div {
      padding: 5vh 0px 10vh 25px;
      width: 40%;
    }
    .home-maiv-tittle {
      font-size: 70px;
      font-weight: 800;
    }
    .home-main-over {
      font-size: 28px;
      font-weight: 400;
      line-height: 35px;
    }
  }

  /* Landscape 모드일 때 적용할 CSS */
  @media (min-height: 0px) {
    .nav-div {
      height: 15vh;
    }
    .nav-div-wrapper {
      height: 15vh;
    }
    .home-wrapper-div {
      margin-top: 17vh;
    }
  }
  /* Portrait 모드일 때 적용할 CSS */
  @media (min-height: 400px) {
    .nav-div {
      height: 6vh;
    }
    .nav-div-wrapper {
      height: 6vh;
    }
    .home-wrapper-div {
      margin-top: 8vh;
    }
  }
`;

const ResponsiveStyles = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default ResponsiveStyles;
