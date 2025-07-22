import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailDiv,
  DetailImg,
  TotalNutDiv,
} from "./Detail.style";

const Detail = () => {
  const { state } = useLocation();

  const { label, image, totalNutrients, ingredientLines } = state;
  const totalNut = Object.values(totalNutrients);
  return (
    <DetailContainer>
      <h1>{label}</h1>
      <DetailDiv>
        <DetailImg src={image}></DetailImg>
        <div>
          <p>İngredient lines</p>
          {ingredientLines.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </DetailDiv>
      <TotalNutDiv>
        {totalNut.map((item, index) => {
          return (
            <li key={index}>
              {item.label}: {item.quantity.toFixed(2)} {item.unit}
            </li>
          );
        })}
      </TotalNutDiv>
    </DetailContainer>
  );
};

export default Detail;
