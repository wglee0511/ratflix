import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import apis from "../../apis/api";
import theme from "../../styles/theme";
import Loader from "../Loader";
import Season from "./Season";

const Wrapper = styled.div`
  margin: 7vh 10px 10px 10px;
  height: 100%;
  color: ${theme.FontColor};
`;

const BackgroundDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const BackgroundLayerDiv = styled.div.attrs({
  className: "detail-layout-div",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const PosterDiv = styled.div.attrs({
  className: "detail-poster-div",
})`
  width: 100%;
  height: 100%;
`;
const ContentsDiv = styled.div.attrs({
  className: "detail-contents-div",
})`
  padding: 5vh 0px 10vh 25px;
  width: 40%;
  height: 100%;
`;

const Tittle = styled.h1`
  font-size: 27px;
  font-weight: 800;
  line-height: 1.5em;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Genre = styled.h2`
  font-size: 15px;
  font-weight: 600;
  line-height: 2.5em;
`;

const NavMenu = styled.ul`
  display: flex;
  font-weight: 600;
  align-items: center;
`;
const EachMenu = styled.li`
  background-color: ${theme.ButtonColor};
  padding: 7px 10px 7px 10px;
  margin-right: 15px;
  border-radius: 5px;
`;

const LoaderWrapper = styled.div.attrs({
  className: "flex-box",
})`
  margin-top: 30vh;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const TvDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detailData, setDetailData] = useState({});
  const params = useParams();
  const id = params.id;
  const match = useRouteMatch();
  const { path, url } = match;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await apis.tvprograms.getDetailPrograms(id);
        const {
          episode_run_time,
          genres,
          homepage,
          poster_path,
          seasons,
          overview,
          name,
          last_air_date,
        } = response.data;
        const fullPosterUrl = `${apis.baseUrl}${poster_path}`;
        const year = new Date(last_air_date).getFullYear();
        setDetailData({
          genres,
          homepage,
          fullPosterUrl,
          overview,
          name,
          seasons,
          episode_run_time,
          year,
        });
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
      {!isLoading && (
        <BackgroundDiv
          style={{
            background: `url(${detailData.fullPosterUrl})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <BackgroundLayerDiv>
            <PosterDiv>
              <img src={`${detailData.fullPosterUrl}`} alt={detailData.name} />
            </PosterDiv>
            <ContentsDiv>
              <Tittle>{detailData.name}</Tittle>
              <Genre>{`${detailData.year} • ${detailData.episode_run_time}min`}</Genre>
              <Genre>
                {detailData?.genres?.map((each) => {
                  const name = each.name;
                  return `${name} `;
                })}
              </Genre>
              <NavMenu>
                <EachMenu>
                  <a target="_blank" href={detailData.homepage}>
                    홈페이지
                  </a>
                </EachMenu>
                <EachMenu>
                  <NavLink exact to={url}>
                    설명
                  </NavLink>
                </EachMenu>
                <EachMenu>
                  <NavLink exact to={`${url}/seasons`}>
                    시즌
                  </NavLink>
                </EachMenu>
              </NavMenu>

              <ContentDiv>
                <Switch>
                  <Route exact path={`${path}`}>
                    <Genre>{detailData.overview}</Genre>
                  </Route>
                  <Route exact path={`${path}/seasons`}>
                    <Season seasons={detailData.seasons} />
                  </Route>
                </Switch>
              </ContentDiv>
            </ContentsDiv>
          </BackgroundLayerDiv>
        </BackgroundDiv>
      )}
    </Wrapper>
  );
};

export default TvDetail;
