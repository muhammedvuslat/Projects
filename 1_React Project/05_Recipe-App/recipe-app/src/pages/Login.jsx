import {
  FormContainer,
  LoginContainer,
  StyledImg,
  StyledHeader,
  StyledForm,
  StyledInput,
  StyledLButton,
  StyledRButton,
} from "../styles/pages.style/Login.style";

import { useNavigate } from "react-router-dom";

import meal from "../assets/meal.svg";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(userName, JSON.stringify(password));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <StyledImg src={meal} />
        <StyledHeader>Vuslat/Recipe</StyledHeader>
        <StyledForm>
          <StyledInput
            placeholder="Enter User Name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <StyledInput
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledLButton>Login</StyledLButton>
          <StyledRButton to="/register">Register</StyledRButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
