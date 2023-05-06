import styled from "styled-components";
import Flex from "../global.style/Flex.style";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: #00adb5;
  min-height: calc(100vh-75px);
  padding: 0.5rem;
`;
export const HeaderContainer = styled(Flex)`
  margin: 25px;
  img {
    width: 200px;
  }
`;

export const DetailPart = styled(Flex)`
  border: 1px solid white;
  flex-direction: row;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #c8e9bf;
`;

export const NutreintsPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
export const ImgContainer = styled.div`
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RecipeContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;