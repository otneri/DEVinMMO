// import {useLocation} from 'react-router-dom'
import { LiStyled, NavStyled, UlStyled, AStyled } from "./NavbarComp.styled";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // const { pathname } = useLocation();

  return (
    <NavStyled>
      <UlStyled>
        <LiStyled>
          <Link to="/home">Inicio</Link>
        </LiStyled>

        <LiStyled>
          <Link to="/devices">Dispositivos</Link>
        </LiStyled>

        <LiStyled>
          <Link to="/perfil">Perfil</Link>
        </LiStyled>
      </UlStyled>
    </NavStyled>
  );
};
