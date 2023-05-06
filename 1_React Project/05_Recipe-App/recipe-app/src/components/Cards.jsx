import {
  Card,
  CardButton,
  CardHeaderText,
  CardImage,
  CardsContainer,
} from "../styles/components.style/Cards.style";
import defaultImage from "../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <CardsContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <CardHeaderText
              paddingStyle={recipe.label.length < 32 ? "short" : "long"}
            >
              {recipe.label}
            </CardHeaderText>

            <CardImage src={recipe.image || defaultImage} />
            <CardButton
              onClick={() => {
                navigate("detail", { state: recipe, replace: false });
                console.log(recipe);
              }}
            >
              View More
            </CardButton>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
