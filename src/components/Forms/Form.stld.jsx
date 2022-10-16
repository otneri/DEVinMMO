import styled from "styled-components";

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin: 2em 0em;
`;

export const SpanError = styled.span`
  color: ${({ theme }) => theme.color.error};
`;

export const DivBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLogin = styled.input`
  padding: 0.7em;
  width: 25em;
  &:hover {
    border-color: ${({ theme }) => theme.color.backgroundHeader};
  }
  border-style: solid;
`;
