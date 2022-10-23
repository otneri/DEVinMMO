import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: max-content;
  padding: 1em;
  background-color: beige;
  margin: 3em 0em;

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
