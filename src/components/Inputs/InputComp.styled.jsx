import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 0.7em;
  width: 25em;
  &:hover {
    border-color: ${({ theme }) => theme.color.backgroundHeader};
  }
  border-style: solid;
`;
export const ConteinerInput = styled.div`
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


