import styled from "styled-components";
import { Link } from "react-router-dom";


export const Linkstld = styled(Link)`
    color: white;
    font-size: larger;
    
    &:hover {
    text-decoration: underline;
    color: white;
  }
    
`

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const UlStyled = styled.ul`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1em;
`;
export const LiStyled = styled.li`
  list-style: none;
`;
export const AStyled = styled.a`
  color: ${({ theme }) => theme.text.white};
  text-decoration: none;

  &:hover {
    color: #2e4052;
  }
`;
