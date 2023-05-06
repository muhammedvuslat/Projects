import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  /* justify-content: center; */
  align-items: ${({ align }) => (align ? align : "center")};
  /* align-items: center; */
  flex-wrap: ${({ wrap }) => wrap && wrap};
  /* flex-wrap: wrap; */
`;
export default Flex;
