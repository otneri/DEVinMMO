import { PaperStyled, Comodos, DivPaperDeviceStyled } from "./Paper.styled";
import { BotaoOnOff } from "../Botoes/Botao";
import Proptypes from "prop-types";
import { Paragraph } from "../Paragraph/Paragraph"

export const Paper = ({ children, handleclick }) => {
  return <PaperStyled onClick={handleclick}>{children}</PaperStyled>;
};

export const PaperListDevices = ({ children }) => {
  return <>{children}</>;
};

export const PaperDevice = ({ handleclick }) => {
  return (
    <PaperStyled onClick={handleclick}>
      <DivPaperDeviceStyled>
        
        <div>
          <Paragraph>Lâmpada</Paragraph>
          <Comodos>
            <p>Casa</p> {`-`}
            <p>Quarto</p> {`-`}
            <p>ON</p>
          </Comodos>
        </div>
        <BotaoOnOff>On</BotaoOnOff>
      </DivPaperDeviceStyled>
    </PaperStyled>
  );
};

Paper.propTypes = {
  children: Proptypes.node.isRequired,
  handleclick: Proptypes.func,
};

PaperListDevices.propTypes = {
  children: Proptypes.node,
};

PaperDevice.propTypes = {
  handleclick: Proptypes.func,
};
