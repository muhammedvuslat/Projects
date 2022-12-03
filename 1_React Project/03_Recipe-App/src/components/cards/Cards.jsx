import React from "react";
import "./Cards.style";
import { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/default-image.jpg";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <Header>{recipe.label} </Header>
            <Image src={recipe.image || defaultImage} />
            <Button
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })
              }
            >
              View More
            </Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
