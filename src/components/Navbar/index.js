import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Fried chicken</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
