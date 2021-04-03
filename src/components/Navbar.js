import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import theme from "../styles/theme";



const NavDiv = styled.div`
color: ${theme.FontColor};
display:flex;
align-items: center;
`

const BannerText = styled.h1`
font-weight: 800;
font-size: 30px;
color: ${theme.BannerColor};
`
const BannerNav = styled.div`
margin: 15px 15px 15px 15px;
`

const EachNav = styled.div`
margin: 15px 15px 15px 15px;
`


const LinkDiv = styled(Link)`` 


const Navbar = (props) => {
    return (
        <NavDiv>
            <BannerNav>
            <BannerText>Ratflix</BannerText>
            </BannerNav>
            <EachNav >Movie</EachNav>
            <EachNav>Tv</EachNav>
            <EachNav>Search</EachNav>

        </NavDiv>

    );
}

export default Navbar