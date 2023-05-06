import styled from "styled-components";
import Flex from "../global.style/Flex.style";
import { Link } from "react-router-dom";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  border-radius: 50%;
  border: 4px solid #ffff;
  padding: 0.5rem;
  flex-direction: column;
  background: rgba(26, 103, 170, 0.6);
`;
export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;
export const StyledHeader = styled.h1`
  color: wheat;
  font-size: 3rem;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: wheat;
  margin: 1rem;
  text-indent: 1rem;
`;
export const StyledLButton = styled.button`
  /* Login Container */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: wheat;
  border: none;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const StyledRButton = styled(Link)`
  /* Login Container */
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: wheat;
  border: none;
  margin: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;
