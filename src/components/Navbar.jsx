import styleNavbar from './CssComponen/Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';

import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBarPrimary = () => {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const changeBackGround = () => {
    if (window.scrollY >= 100) {
      setNavbar(false)
    }
    else {
      setNavbar(true)
    }
  }

  window.addEventListener('scroll', changeBackGround)

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  // const token = localStorage.getItem("token")
  // const user = localStorage.getItem("user")
  // const decode = JSON.parse(user)
  // console.log(decode.name)
  // console.log(token)


  const isLoggin = () => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token) {
      const decode = JSON.parse(user)
      return (
        <NavLink href="/login">
          <Link className={styleNavbar.navLinkColorLogin} to="/login" >
            <li className={styleNavbar.userName} >{decode.name}</li>
            <button className={styleNavbar.iconLogout} onClick={logout}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </Link>
        </NavLink >
      )
    }
    else {
      return (
        <NavLink href="/login">
          <Link className={styleNavbar.navLinkColorLogin} to="/login" >
            <i className={`fa fa-user ${styleNavbar.fontAwesomeLogin}`} ></i>
            Login
          </Link>
        </NavLink>
      )
    }
  }


  return (
    <>
      <div>
        <Navbar
          // color="transparent"
          expand="md"
          fixed="top"
          light
          // className={`${navbar}? ${styleNavbar.navbarNotActive} : ${styleNavbar.navbarActive}`}
          className={` ${styleNavbar.paddingNav} : ${styleNavbar.marginNav}  
          ${navbar ? `${styleNavbar.navbarNotActive}` : `${styleNavbar.navbarActive}`}`}
        // style={{ position: "absolute" }}
        >
          {/* <NavbarBrand className={styleNavbar.iconNavBar} href="/"> reactstrap</NavbarBrand> */}
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink >
                  <Link className={styleNavbar.navLinkColor} to="/">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  <Link className={styleNavbar.navLinkColor} to="/addrecipe">
                    Add Recipe
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  <Link className={styleNavbar.navLinkColor} to="/profile">
                    Profile
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              {isLoggin()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBarPrimary;