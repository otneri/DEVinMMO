import styled from "styled-components";

export const BotaoStyled = styled.button`
  /* como add condicional */
  /* background-color: ${(props) =>
    props.bg === "primario"
      ? ({ theme }) => theme.color.backgroundHeader
      : "red"}; */

  background-color: ${({ theme }) => theme.color.backgroundHeader};
  color: ${({ theme }) => theme.text.white};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2vh;
  align-items: center;
  border: none;
  padding: 0.5em;
  width: 7em;
  border-radius: 1em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.orange};
    background-color: ${({ theme }) => theme.color.botao};
  }
`;
export const BotaoStyledLogin = styled.button`
  background-color: ${({ theme }) => theme.color.botao};
  color: ${({ theme }) => theme.text.white};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  padding: 0.5em;
  width: 7em;
  border-radius: 1em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.orange};
    background-color: #2e4052b0;
  }
`;

export const BotaoLinkStiled = styled.a`
  cursor: pointer;
  margin-top: 1em;
  text-decoration: underline;
  color: ${({ theme }) => theme.text.orangedark};
`;

export const BotaoOnOffStyled = styled.button`
  border-radius: 1em;
  background-color: ${({ theme }) => theme.color.successBackground};
  border: none;
  cursor: pointer;
  padding: 1vh;
  text-transform: uppercase;
`;
export const BotaoFiltroDeviceStld = styled.button`
  padding: 0.5em;
  margin-right: 1em;
  border-radius: 0.5em;
  background-color: transparent;
  border-color: ${({ theme }) => theme.text.orange};
  border-width: 0.01em;
  border-style: solid;
  color: ${({ theme }) => theme.text.orange};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #f0b27a;
    color: ${({ theme }) => theme.text.white};
    font-weight: bold;
  }
`;
