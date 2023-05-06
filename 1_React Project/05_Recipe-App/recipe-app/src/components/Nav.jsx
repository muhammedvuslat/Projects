import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BrandStyle,
  Hamburger,
  MenuLink,
  MenuStyled,
  NavStyle,
} from "../styles/components.style/Nav.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavStyle justify="space-between" wrap="wrap">
      <BrandStyle to="/">
        <i>{"Vuslat/ "}</i>
        <span>Recipe</span>
      </BrandStyle>
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu />
      </Hamburger>
      <MenuStyled isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </MenuStyled>
    </NavStyle>
  );
};

export default Navbar;
