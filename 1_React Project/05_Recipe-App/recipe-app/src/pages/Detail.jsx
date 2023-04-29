import diet from "../assets/diet.svg";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  DetailContainer,
  DetailPart,
  NutreintsPart,
  ImgContainer,
  RecipeContainer,
} from "../styles/pages.style/Detail.style";

const Detail = () => {
  const { state } = useLocation();
  console.log("State-geldiii", state);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={diet} alt="default" />
      </HeaderContainer>
      <DetailPart>
        <NutreintsPart>
          <h1>Nutreints</h1>
          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>Total Weight: {Math.round(state.totalWeight)}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          <p>
            {state.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label} : {Math.round(item.total)}
              </p>
            ))}
          </p>
        </NutreintsPart>
        <ImgContainer>
          <img src={state.image} alt="default" />
        </ImgContainer>
        <RecipeContainer>
          <h1>Recipe</h1>
          {state.ingredientLines.map((ingredient, index) => (
            <div>
              <p key={index}> 🍴 {ingredient}</p>
            </div>
          ))}
        </RecipeContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
