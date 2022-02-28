import { NavLink } from "react-router-dom";
import { NAV } from "../../constant/nav";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
    background-color: #fff;
    display: flex;
    align-items: center;
    border-radius: 10px;
    a {
        margin: 0 30px;
        display: block;
        font-size: 20px;
        color: #073763;
        font-weight: bold;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        transition: all 0.3s ease-in-out;
        &:hover {
        color: #49a6e9;
        }
        &.active {
            color: #49a6e9;
        }
    }
    @media screen and (max-width: 900px) {
        display: block;
        width: 100%;
        overflow: hidden;
        height: 0px;
        transition: all 0.3s linear;
        border-radius: 0px;
        ${({showNav}) => showNav && css`
            height: 268px;
        `}
        a {
            margin: 0;
            padding: 20px 30px;
            display: block;
            font-size: 20px;
            color: #073763;
            font-weight: bold;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            transition: all 0.3s ease-in-out;
            &:hover {
                background: #93d2ff;
                color: #fff;
            }
        }
    }
`;

function Nav({showNav}){
    return (
        <StyledNav showNav={showNav}>
            {NAV.map(nav =>
                <NavLink key={nav.id} to={nav.to} className={({isActive}) => isActive ? "active" : ""}>{nav.text}</NavLink>
            )}
        </StyledNav> 
    );
}

export default Nav;