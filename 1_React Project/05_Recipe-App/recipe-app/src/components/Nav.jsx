import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrandStyle, NavStyle } from "../styles/components.style/Nav.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavStyle>
      <BrandStyle>
        <i>{"Vuslat/"}</i>
        <span>Recipe</span>
      </BrandStyle>
      <div
        className="Hamburger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu />
      </div>
      <div className="MenuStyled">
        <p to="/">Home</p>
        <p to="about">About</p>
        <p to="register">Register</p>
        <p to="/">LOG</p>
      </div>
    </NavStyle>
  );
};

export default Navbar;
