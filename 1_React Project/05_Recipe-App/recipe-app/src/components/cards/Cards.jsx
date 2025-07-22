import React from "react";
import {
  CardButton,
  CardContainer,
  CardDiv,
  CardImage,
  CardTitle,
} from "./Cards.tyle";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <CardContainer>
      {recipes.map((item) => {
        const { recipe } = item;
        // console.log(recipe);
        return (
          <CardDiv>
            <CardTitle>{recipe.label}</CardTitle>
            <CardImage src={recipe.image}></CardImage>
            <CardButton
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })
              }
            >
              View Detail
            </CardButton>
          </CardDiv>
        );
      })}
    </CardContainer>
  );
};

export default Cards;
