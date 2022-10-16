import styled from "styled-components";

export const SelectStld = styled.select`
  padding: 0.7em;
  width: 25em;
  &:hover {
    border-color: ${({theme})=> theme.color.backgroundHeader};;
  }
`;
export const OptionStld = styled.option`
  text-transform: uppercase;
`;
export const ModalStld = styled.Moda;
