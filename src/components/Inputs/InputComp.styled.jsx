import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: ${({ theme }) => theme.color.cardBackground};
  padding: 0.7em;
  width: 25em;
  &:hover {
    border-color: ${({ theme }) => theme.color.backgroundHeader};
  }
  border-style: solid;
`;
export const ConteinerInput = styled.div`

  background-color: ${({ theme }) => theme.color.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InputErrorStyled = styled.input`
  padding: 0.7em;
  width: 25em;
  border-color: ${({ theme }) => theme.color.error};
  border-style: solid;
`;

export const InputSearchstld = styled.input`
  width: 100vh;
  text-align: center;
  text-transform: uppercase;
  padding: 1em;
  display: flex;
  margin: 1em;
  &:hover {
    border-color: ${({ theme }) => theme.color.backgroundHeader};
  }
  border-style: solid;
`;

export const DivSearchstld = styled.div`

  background-color: ${({ theme }) => theme.color.cardBackground};
  display: flex;
  justify-content: center;
`