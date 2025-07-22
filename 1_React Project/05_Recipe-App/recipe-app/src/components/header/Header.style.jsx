import styled from "styled-components";
import ButtonStyle from "../button/Button.style";

const HeaderDiv = styled.header`
  text-align: center;
`;

export default HeaderDiv;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 400;
`;

export const HeaderForm = styled.form`
  display: flex;
  padding: 30px;
  justify-content: center;

  align-items: end;
`;

export const InputStyle = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  height: 30px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    padding-left: 5px;
    font-size: 15px;
  }
`;

export const HeaderButton = styled(ButtonStyle)`
  margin: 0 0.5rem;
  height: 35px;
`;

export const SelectStyle = styled.select`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  width: auto;
  height: 35px;
`;
