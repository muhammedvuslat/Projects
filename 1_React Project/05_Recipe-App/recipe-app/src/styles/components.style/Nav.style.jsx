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
  border: 4px solid yellow;
  width: 100%;
  overflow: hidden;
`;

export const MenuLink = styled(Link)`
  /* MenuLink p tag */
  border: 2px solid brown;
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  /*  color theme dan alınacak */
  color: brown;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    //todo
    /* hover color theme dan alınacak */
    color: pink;
    font-weight: bold;
  }
  //todo
  /* media ayarları theme den alınacak */
  /* @media */
`;

export const Hamburger = styled.div`
  /* Hamburger div */
  border: 4px solid blue;
  display: none;
  cursor: pointer;
  color: red;
  //todo
  /* media ayarları theme den alınacak */
  /* @media */
`;
