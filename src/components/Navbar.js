import React from "react";
import styled from "styled-components";
import {Link, useRouteMatch, withRouter} from "react-router-dom";
import theme from "../styles/theme";



const NavDiv = styled.div`
height: 10vh;
color: ${theme.FontColor};
display:flex;
align-items: center;
background-color: ${theme.NavBgColor};
`

const BannerText = styled(Link)`
font-weight: 800;
font-size: 30px;
color: ${theme.BannerColor};
`
const EachLink = styled(Link)`
margin: 0 10px 0 10px;
font-weight: 800;
font-size: 15px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
    border-bottom: 3px solid ${props=> props.current?theme.EtcColor:"transparent"}

;
`

const BannerNav = styled.div`
margin: 15px 15px 15px 15px;
`

const EachNav = styled.div`
height: 100%;
`

const Navbar = (props) => {
    const matchTv = useRouteMatch({
        path: "/tv"
    });
    const matchSearch = useRouteMatch({
        path: "/search"
    });
    
    return (
        <NavDiv>
            <BannerNav>
            <BannerText to="/">Ratflix</BannerText>
            </BannerNav>

            <EachNav><EachLink to="/tv" current={matchTv!==null?true:false} >TV</EachLink></EachNav>
            <EachNav><EachLink to="/search" current={matchSearch!==null?true:false}>Search</EachLink></EachNav>

        </NavDiv>

    );
}

export default Navbar