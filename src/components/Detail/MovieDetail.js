import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import apis from "../../apis/api";
import theme from "../../styles/theme";

const Wrapper = styled.div`
margin-top: 7vh;
color: ${theme.FontColor};
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
          vote_average,
          runtime
        } = response.data;
        const fullPosterUrl=`${apis.baseUrl}${poster_path}`;
        setDetailData({
          genres, 
          homepage, 
          fullPosterUrl,
          overview,
          tagline,
          title,
          vote_average,
          runtime
        });
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })()
  },[])

  return <Wrapper>
    <div>
      <div>
        poster
      </div>
      <div>
        <h1>tittle</h1>
        <div>genres</div>
        <div>
          <Link>홈페이지</Link>
        </div>
        
      </div>
    </div>
  </Wrapper>;
};

export default MovieDetail;
