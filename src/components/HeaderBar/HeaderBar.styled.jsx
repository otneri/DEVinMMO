import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1vh 4vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundHeader};
  gap: 5vh;
`;

export const Div = styled.div`
  display: flex;
  gap: 1vh;
`;
export const TitleHeaderStyled = styled.h1`
  color: white;
`;
