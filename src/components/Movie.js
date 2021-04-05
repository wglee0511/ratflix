import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const Movie = () => {
  const [NowMovie, setNowMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await apis.getNowPlayMovies
        .then((res) => {
          const NowMovieApiData = res.data.results;
          setNowMovie(NowMovieApiData);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  console.log(NowMovie);

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
