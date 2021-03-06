import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {GiChicken} from 'react-icons/gi'
export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;

`

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width:400px){
    position: absolute;
    top: 10;
    left: 25px;
}

`

export const NavIcon = styled.div`
display: block;
position: absolute;
top: -10;
right: 0;
cursor: pointer;
color: #fff;


`

export const Bars = styled(GiChicken)`
font-size: 3rem;
transform: translate(-50%, 50%);
`
