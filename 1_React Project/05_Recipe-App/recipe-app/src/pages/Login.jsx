import {
  FormContainer,
  LoginContainer,
  StyledImg,
  StyledHeader,
  StyledForm,
  StyledInput,
  StyledButton,
} from "../styles/pages.style/Login.style";

import meal from "../assets/meal.svg";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <StyledHeader>Vuslat/Recipe</StyledHeader>
        <StyledForm>
          <StyledInput />
          <StyledInput />
          <StyledButton>Button</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
