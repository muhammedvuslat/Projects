import styled from "styled-components";
import backGroud from "../../assets/homeBG.svg";

// export const ImgDiv = styled.div`
//   /* İmg divi */
//   display: flex;
//   justify-content: center;
//   margin: 2rem;
// `;

// export const HomeImg = styled.img`
//   /* Home img */
//   width: 80%;
//   max-width: 750px;
// `;

export const HeaderText = styled.h1`
  /* Home Text */
  font-size: 2.5rem;
  color: #a93434;
  text-align: center;
`;

export const HomeDiv = styled.div`
  /* border: 2px solid red; */
  background-image: url(${backGroud});
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;
