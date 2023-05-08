import styled from "styled-components";
import Flex from "../global.style/Flex.style";

export const HeaderContainer = styled(Flex)`
  /*Todo */
  /* background: ${({ theme }) => theme.colors.mainColor}; */
  flex-direction: column;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 50%;
  margin: 5px;
  padding: 90px;
  background: rgba(109, 147, 218, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
`;
export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  margin: 5px;
`;

export const MealSelect = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;

export const MainButton = styled.button`
  background-color: yellow;
  border-radius: 0% 1rem;
  height: 3rem;
  padding: 5px;
  outline: none;
  border: none;
  margin: 5px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
    transition: all solid white;
    border: 1px solid white;
  }
`;
