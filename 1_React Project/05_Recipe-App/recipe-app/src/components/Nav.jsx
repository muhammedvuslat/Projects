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
  const userStorage = sessionStorage.length > 0;
  const lButton = userStorage;

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
        <MenuLink
          to={lButton ? "/" : "/login"}
          onClick={() => sessionStorage.clear()}
        >
          {lButton ? "Logout" : "Login"}
        </MenuLink>
      </MenuStyled>
    </NavStyle>
  );
};

export default Navbar;
