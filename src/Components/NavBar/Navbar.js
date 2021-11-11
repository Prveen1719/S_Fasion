import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Navcomp';
import Logo from '../../Images/75181383_120659176036901_8292211401821257728_n.jpg';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to = '/'>
                    <img src={Logo} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/sing-up" activeStyle>
                        Sing Up
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

