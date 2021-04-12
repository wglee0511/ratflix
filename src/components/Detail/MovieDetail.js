import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import apis from "../../apis/api";
import theme from "../../styles/theme";
import Loader from "../Loader";
import ReactPlayer from "react-player/youtube";

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
  padding: 5vh 25px 10vh 0;
  width: 40%;
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

const ContentDiv = styled.div``;
const VideoDiv = styled.div`
  margin: 30px 0 0 0;
`;

const MovieDetail = () => {
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
        const response = await apis.movies.getDetailMovie(id);
        const videoData = await apis.movies.getVideoMovie(id);
        const videoUrl = videoData.data.results[0].key;
        const {
          genres,
          homepage,
          poster_path,
          overview,
          tagline,
          title,
          vote_average,
          runtime,
          release_date,
        } = response.data;
        const fullPosterUrl = `${apis.baseUrl}${poster_path}`;
        const youtubeUrl = `${apis.youTubeUrl}${videoUrl}`;
        const year = new Date(release_date).getFullYear();
        setDetailData({
          genres,
          homepage,
          fullPosterUrl,
          overview,
          tagline,
          title,
          vote_average,
          runtime,
          year,
          youtubeUrl,
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
              <img src={`${detailData.fullPosterUrl}`} style={{}} />
            </PosterDiv>
            <ContentsDiv>
              <Tittle>{detailData.title}</Tittle>
              <Genre>{`${detailData.year} • ${detailData.runtime}min`}</Genre>
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
                  <NavLink exact to={`${url}/video`}>
                    예고
                  </NavLink>
                </EachMenu>
              </NavMenu>

              <ContentDiv>
                <Switch>
                  <Route exact path={`${path}`}>
                    <Tittle>{detailData.tagline}</Tittle>
                    <Genre>{detailData.overview}</Genre>
                  </Route>
                  <Route exact path={`${path}/video`}>
                    <VideoDiv>
                      <ReactPlayer width="100%" url={detailData.youtubeUrl} />
                    </VideoDiv>
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

export default MovieDetail;
