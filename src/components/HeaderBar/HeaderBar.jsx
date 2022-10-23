import { Logo } from "../Images/img";
import { BotaoLogin } from "../Botoes/Botao";
import { Div, HeaderStyled, TitleHeaderStyled } from "./HeaderBar.styled";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/NavbarComp/NavbarComp";

export const HeaderBar = () => {
  

  return (
    <HeaderStyled>
      <Div>
        <Logo />
        <TitleHeaderStyled>DevinMMO</TitleHeaderStyled>
      </Div>

      <Navbar />


    </HeaderStyled>
  );
};
