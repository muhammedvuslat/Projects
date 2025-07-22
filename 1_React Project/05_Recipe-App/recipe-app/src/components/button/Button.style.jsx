import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 5px;
  text-align: center;
  font-weight: 400;
  background-color: ${(props) => props.theme.colors.soft};
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  align-items: center;
`;

export default ButtonStyle;
