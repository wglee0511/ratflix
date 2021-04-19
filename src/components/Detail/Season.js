import React from "react";
import styled from "styled-components";
import apis from "../../apis/api";

const VideoDiv = styled.div.attrs({
  className: "grid-box-seaaon",
})`
  margin: 30px 0 0 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 15px;
`;
const GridContent = styled.div`
  width: 100%;
  height: 100%;
`;

const GridImageDiv = styled.div`
  width: 100%;
  height: 15vh;
`;

const NameHead = styled.h1`
  font-weight: 600;
  font-size: 20px;
`;
const YearHead = styled.h2`
  font-weight: 600;
  font-size: 15px;
`;

const Season = (props) => {
  const { seasons } = props;

  return (
    <VideoDiv>
      {seasons?.map((each) => {
        const { name, poster_path, air_date, episode_count } = each;
        const year = new Date(air_date).getFullYear();
        const fullPosterSeason = `${apis.baseUrl}${poster_path}`;
        if (episode_count !== 0) {
          return (
            <GridContent>
              <GridImageDiv
                style={{
                  background: `url(${fullPosterSeason})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></GridImageDiv>
              <div>
                <NameHead>{name}</NameHead>
                <YearHead>{year}</YearHead>
              </div>
            </GridContent>
          );
        }
      })}
    </VideoDiv>
  );
};

export default Season;
