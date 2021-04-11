import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import apis from "../../apis/api";
import theme from "../../styles/theme";

const Wrapper = styled.div`
height: 100vh;
margin-top: 7vh;
color: ${theme.FontColor};
background-color: ${theme.FontColor};
`;

const MovieDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detailData, setDetailData] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(()=>{
    (async()=>{
      setIsLoading(true);
      try {
        const response = await apis.movies.getDetailMovie(id);
        const {
          genres, 
          homepage, 
          poster_path,
          overview,
          tagline,
          title,
          vote_average
        } = response.data;
        const fullPosterUrl=`${apis.baseUrl}${poster_path}`;
        setDetailData({
          genres, 
          homepage, 
          fullPosterUrl,
          overview,
          tagline,
          title,
          vote_average
        });
        setIsLoading(false);

      } catch (error) {
        console.log(error);
      }
    })()
  },[])

  return <Wrapper>MovieDetail</Wrapper>;
};

export default MovieDetail;
