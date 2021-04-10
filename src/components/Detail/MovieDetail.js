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
        const response = await apis.search.getSearchMovie(id);
        const responseData = response.data;
        console.log(response);

      } catch (error) {
        console.log(error);
      }
    })()
  },[])

  return <Wrapper>MovieDetail</Wrapper>;
};

export default MovieDetail;
