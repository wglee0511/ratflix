import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ApiContext } from "../Context/ApiContext";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const Movie = (props) => {
  const apiContext = useContext(ApiContext);
  const isLoading = apiContext.isLoading;

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
