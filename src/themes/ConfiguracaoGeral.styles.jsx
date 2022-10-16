import styled from "styled-components";

export const BodyStyled = styled.div`
  
  background-color: ${({theme}) =>theme.color.backgroundPrincipal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6em;
`;
