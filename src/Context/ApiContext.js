import React, { useEffect, useState } from "react";
import { createContext } from "react";
import apis from "../apis/api";

const ApiContext = createContext();

const ApiProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstMovie, setFirstMovie] = useState({});
  const [now, setNow] = useState({});
  const [pop, setPop] = useState({});
  const [top, setTop] = useState({});
  const [onAirTv, setOnAirTv] = useState({});
  const [popTv, setPopTv] = useState({});
  const [topTv, setTopTv] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        //movie
        const apiNowData = await apis.movies.getNowPlayMovies;
        const nowData = apiNowData.data.results;

        const apiPopData = await apis.movies.getPopMovies;
        const popData = apiPopData.data.results;

        const apiTopData = await apis.movies.getTopRatedMovies;
        const topData = apiTopData.data.results;
        //tv
        const apiOnAir = await apis.tvprograms.getOnTheAirPrograms;
        const onAirData = apiOnAir.data.results;

        const apiPopTv = await apis.tvprograms.getPopPrograms;
        const popTvData = apiPopTv.data.results;

        const apiTopTv = await apis.tvprograms.getOnTheAirPrograms;
        const topTvData = apiTopTv.data.results;

        //movie
        setNow(nowData);
        setPop(popData);
        setTop(topData);
        //tv
        setOnAirTv(onAirData);
        setPopTv(popTvData);
        setTopTv(topTvData);

        setFirstMovie({
          id: popData[0].id,
          overview: popData[0].overview,
          poster_path: popData[0].poster_path,
          title: popData[0].title,
          vote_average: popData[0].vote_average,
        });

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const value = { isLoading, now, pop, top, onAirTv, popTv, topTv, firstMovie };
  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
