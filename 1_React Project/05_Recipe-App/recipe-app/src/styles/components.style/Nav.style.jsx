import styled from "styled-components";
import Flex from "../global.style/Flex.style";
import { Link } from "react-router-dom";

export const NavStyle = styled(Flex)`
  padding: 1rem 1.5rem;
  background-color: aqua;
`;

export const BrandStyle = styled(Link)`
  /* BrandStyle */
  color: blue;
  border: 2px solid red;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: darkblue;
  }
`;

export const MenuStyled = styled(Flex)`
  flex-direction: column;
`;

export const MenuLink = styled(Link)`
  /* MenuLink p tag */
`;

export const Hamburger = styled.div`
  /* Hamburger div */
`;
