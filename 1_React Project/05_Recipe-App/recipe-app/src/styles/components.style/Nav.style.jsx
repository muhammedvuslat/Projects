import styled from "styled-components";
import Flex from "../global.style/Flex.style";
import { Link } from "react-router-dom";

export const NavStyle = styled(Flex)`
  padding: 1rem 1.5rem;
  /* background: ${({ theme }) => theme.colors.navbarBgColor}; */
`;

export const BrandStyle = styled(Link)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const MenuStyled = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "480px" : "0")};
    overflow: hidden;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
