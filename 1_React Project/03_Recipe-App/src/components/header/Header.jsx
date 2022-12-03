import React from "react";
import "./Header.style";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./Header.style";

const Header = (setQuery) => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>

      <FormContainer>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        ></FoodInput>
        <Button type="text">Search</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
