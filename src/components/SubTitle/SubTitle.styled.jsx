import styled from "styled-components";

export const SubTitleStyled = styled.h1`
  color: ${({theme})=> theme.text.orangedark};
  font-weight: bold;
  font-size: large;
  margin: .3em 0em;
`;

export const SubParagraphStld = styled.div`
  color: ${({theme})=> theme.text.grey};
  display: flex;
  gap: 1em;
  font-size: ${(props) =>
    props.sz === "bold" ? `${({theme})=> theme.text.boldSize}` : ""};
`;
