import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import theme from "../styles/theme";



const NavDiv = styled.div`
color: black;
`

const BannerText = styled.h1`
font-weight: 800;
font-size: 30px;
color: ${theme.BannerColor};
`
const EachNav = styled.div``


const LinkDiv = styled(Link)`` 


const Navbar = (props) => {
    return (
        <NavDiv>
            <EachNav>
            <BannerText>Ratflix</BannerText>
            </EachNav>

        </NavDiv>

    );
}

export default Navbar