import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../apis/api";
import Loader from "./Loader";

const Wrapper = styled.div``;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})``;

const TvProgram = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onAir, setOnAir] = useState({});
  const [pop, setPop] = useState({});
  const [top, setTop] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const apiOnAir = await apis.tvprograms.getOnTheAirPrograms;
        const onAirData = apiOnAir.data.results;

        const apiPop = await apis.tvprograms.getPopPrograms;
        const popData = apiPop.data.results;

        const apiTop = await apis.tvprograms.getOnTheAirPrograms;
        const topData = apiTop.data.results;

        setOnAir(onAirData);
        setPop(popData);
        setTop(topData);

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
      {!isLoading && <div>TV Programs</div>}
    </Wrapper>
  );
};

export default TvProgram;
