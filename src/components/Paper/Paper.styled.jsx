import styled from "styled-components";

export const PaperStyled = styled.section`
  background-color: ${({ theme }) => theme.color.cardBackground};
  color: ${({ theme }) => theme.text.orange};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 1em;
`;

export const Comodos = styled.div`
  color: ${({ theme }) => theme.text.grey};
  display: flex;
  font-size: smaller;
  gap: 0.3em;
`;

export const DivPaperDeviceStyled = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: column;
  width: 30em;
  justify-content: space-around;
  gap: .5em;
  margin: 2em;
`;
