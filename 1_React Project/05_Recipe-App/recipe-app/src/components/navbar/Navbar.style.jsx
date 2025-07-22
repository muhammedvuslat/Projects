import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.thirdy};
  align-items: center;
  padding: 2rem 1rem;
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

export default NavStyle;

export const NavLinkStyle = styled(NavLink)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 22px;
  margin: 10px;
  cursor: pointer;
`;
