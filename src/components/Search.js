import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieSearch, setMovieSearch] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const movieSearch = await apis.search.getSearchMovie("아이언맨");

        setIsLoading(false);
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
      {!isLoading && <div>Search</div>}
    </Wrapper>
  );
};

export default Search;
