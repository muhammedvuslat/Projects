import React from "react";
import NavStyle, { Logo, NavLinkStyle } from "./Navbar.style";
import { NavLink } from "react-router-dom";
const login = true;

const Navbar = () => {
  return (
    <NavStyle>
      <div>
        <NavLink to="/">
          <Logo src="./assets/logo.png" alt="" />
        </NavLink>
      </div>
      <div>
        <NavLinkStyle to="/"> Home </NavLinkStyle>
        <NavLinkStyle to="/about"> About </NavLinkStyle>
        {login ? (
          <NavLinkStyle to="/login"> Logout </NavLinkStyle>
        ) : (
          <NavLinkStyle to="/"> Login </NavLinkStyle>
        )}
      </div>
    </NavStyle>
  );
};

export default Navbar;
