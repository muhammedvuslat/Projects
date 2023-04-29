import styled from "styled-components";
import Flex from "../global.style/Flex.style";
import { MainButton } from "./Header.style";

export const CardsContainer = styled(Flex)`
  flex-direction: row;
  border: 2px solid red;
`;

export const Card = styled(Flex)`
  /* Card div */
  border: 1px solid blue;
  flex-direction: column;
  height: 20rem;
  width: 20rem;
  background-color: lightgreen;
  padding: 0.5rem;
  border-radius: 0% 2rem;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const CardHeaderText = styled.h1`
  /* HeaderText  */
  margin-bottom: ${({ paddingStyle }) =>
    paddingStyle === "short" ? "3rem" : "1rem"};
  font-size: 1.5rem;
  text-align: center;
`;
export const CardImage = styled.img`
  /* Cardİmg */
  height: 10rem;
  border-radius: 10px;
`;

export const CardButton = styled(MainButton)`
  /* CardButton */
  margin-top: 12px;
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
`;
