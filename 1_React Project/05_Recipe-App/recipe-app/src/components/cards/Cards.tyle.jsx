import styled from "styled-components";
import ButtonStyle from "../button/Button.style";

export const CardContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 2rem;
  margin: 1rem;
`;

export const CardDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 5px solid ${({ theme }) => theme.colors.thirdy};
  border-radius: 5px;
  width: 17%;
  height: 20rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  max-height: 2em;
`;

export const CardImage = styled.img`
  border-radius: 5px;
  max-width: 50%;
`;

export const CardButton = styled(ButtonStyle)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
