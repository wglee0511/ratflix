import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import theme from "../styles/theme";

const NavDiv = styled.header.attrs({
  className: "nav-div",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: ${theme.FontColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.NavBgColor};
  z-index: 10;
`;

const BannerNavWrapper = styled.div.attrs({
  className: "nav-div-wrapper",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.NavBgColor};
`;

const BannerText = styled(Link)`
  font-weight: 800;
  font-size: 30px;
  color: ${theme.BannerColor};
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const EachLink = styled(Link)`
  margin: 0 10px 0 10px;
  font-weight: 800;
  font-size: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? theme.EtcColor : "transparent")};
`;

const BannerNav = styled.div`
  margin: 15px 15px 15px 15px;
`;

const EachNav = styled.div`
  height: 100%;
`;

export default withRouter(({ location: { pathname } }) => (
  <NavDiv>
    <BannerNavWrapper>
      <BannerNav>
        <BannerText to="/">Ratflix</BannerText>
      </BannerNav>
      <NavWrapper>
        <EachNav>
          <EachLink to="/" current={pathname === "/"}>
            Home
          </EachLink>
        </EachNav>
        <EachNav>
          <EachLink to="/movies" current={pathname === "/movies"}>
            Movies
          </EachLink>
        </EachNav>
        <EachNav>
          <EachLink to="/tv" current={pathname === "/tv"}>
            TV
          </EachLink>
        </EachNav>
        <EachNav>
          <EachLink to="/search" current={pathname === "/search"}>
            Search
          </EachLink>
        </EachNav>
      </NavWrapper>
    </BannerNavWrapper>
  </NavDiv>
));
