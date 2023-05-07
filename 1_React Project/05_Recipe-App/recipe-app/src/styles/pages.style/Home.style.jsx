import styled from "styled-components";
import backGroud from "../../assets/homeBG.svg";

export const HeaderText = styled.h1`
  /* Home Text */
  font-size: 2.5rem;
  color: #a93434;
  text-align: center;
`;

export const HomeDiv = styled.div`
  border: 2px solid red;
  background-image: url(${backGroud});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${({ recipes }) => (recipes === null ? "center" : "")};
`;
