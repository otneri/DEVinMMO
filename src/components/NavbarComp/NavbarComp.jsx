// import {useLocation} from 'react-router-dom'
import { LiStyled, NavStyled, UlStyled, Linkstld } from "./NavbarComp.styled";


export const Navbar = () => {
  // const { pathname } = useLocation();

  return (
    <NavStyled>
      <UlStyled>
        <LiStyled>
          <Linkstld to="/">INÍCIO</Linkstld>
        </LiStyled>

        <LiStyled>
          <Linkstld to="/noticias">NOTÍCIAS</Linkstld>
        </LiStyled>
      </UlStyled>
    </NavStyled>
  );
};
