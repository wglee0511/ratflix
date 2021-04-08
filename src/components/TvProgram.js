import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import { ApiContext } from "../Context/ApiContext";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const TvProgram = () => {
  const apiContext = useContext(ApiContext);
  const isLoading = apiContext.isLoading;
  return (
    <Wrapper>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && <div>TV Programs</div>}
    </Wrapper>
  );
};

export default TvProgram;
