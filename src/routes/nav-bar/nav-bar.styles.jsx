import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0;
    padding-inline: 1.5rem;
    max-width: 132rem;
    margin: 4rem auto;
`

export const LogoContainer = styled(Link)`
    width: 7rem;

    > svg {
        height: 100%;
        width: 100%;
    }
`

export const NavLinksContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 3rem;
`

export const NavLink = styled(Link)`
    font-size: 2rem;
    cursor: pointer;
    color: #000;
`