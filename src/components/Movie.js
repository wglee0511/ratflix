import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const Movie = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [now, setNow] = useState({});
  const [pop, setPop] = useState({});
  const [top, setTop] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const apiNowData = await apis.movies.getNowPlayMovies;
        const nowData = apiNowData.data.results;

        const apiPopData = await apis.movies.getPopMovies;
        const popData = apiPopData.data.results;

        const apiTopData = await apis.movies.getTopRatedMovies;
        const topData = apiTopData.data.results;

        setNow(nowData);
        setPop(popData);
        setTop(topData);

        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && <div>Movies</div>}
    </Wrapper>
  );
};

export default Movie;
