import { useState } from "react";
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
    <NavStyle>
      <BrandStyle>
        <i>{"Vuslat/"}</i>
        <span>Recipe</span>
      </BrandStyle>
      <Hamburger
        className="Hamburger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu />
      </Hamburger>
      <MenuStyled>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="/">LOG</MenuLink>
      </MenuStyled>
    </NavStyle>
  );
};

export default Navbar;
