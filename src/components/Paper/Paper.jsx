import { PaperStyled, Comodos, DivPaperDeviceStyled } from "./Paper.styled";
import { BotaoOnOff } from "../Botoes/Botao";
import Proptypes from "prop-types";
import { Paragraph } from "../Paragraph/Paragraph"

export const Paper = ({ children, handleclick }) => {
  return <PaperStyled onClick={handleclick}>{children}</PaperStyled>;
};

export const PaperListJogos = ({ children }) => {
  return <DivPaperDeviceStyled>{children}</DivPaperDeviceStyled>;
};

export const PaperDevice = ({ children }) => {
  return (
    <>{children}</>
  );
};

Paper.propTypes = {
  children: Proptypes.node.isRequired,
  handleclick: Proptypes.func,
};

PaperListJogos.propTypes = {
  children: Proptypes.node,
};

PaperDevice.propTypes = {
  handleclick: Proptypes.func,
};
