import styled from "styled-components";

export const GradeStld = styled.div`
  background-color: ${({ theme }) => theme.color.cardBackground};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

export const GradeJogosStld = styled.div`
background-color: ${({ theme }) => theme.color.cardBackground};
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`;