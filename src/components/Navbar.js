import React from "react";
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import theme from "../styles/theme";



const NavDiv = styled.div`
height: 10vh;
color: ${theme.FontColor};
display:flex;
align-items: center;
background-color: ${theme.NavBgColor};
`

const BannerText = styled.h1`
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
border-bottom: 3px solid ${theme.EtcColor};
`

const BannerNav = styled.div`
margin: 15px 15px 15px 15px;
`

const EachNav = styled.div`
height: 100%;
`

const Navbar = (props) => {
    const params = useParams();
    console.log(params);
    return (
        <NavDiv>
            <BannerNav>
            <BannerText>Ratflix</BannerText>
            </BannerNav>
            <EachNav><EachLink to="/" >Movie</EachLink></EachNav>
            <EachNav><EachLink to="/tv" >TV</EachLink></EachNav>
            <EachNav><EachLink to="/search" >Search</EachLink></EachNav>

        </NavDiv>

    );
}

export default Navbar