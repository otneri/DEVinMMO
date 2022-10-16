import Proptypes from "prop-types";
import { ConteinerInput } from "../Inputs/InputComp.styled";
import { SubTitle } from "../SubTitle/SubTitulo";
import { OptionStld, SelectStld } from "./SelectInput.stld";

export const Select = ({ children, placeholder }) => {
  return (
    <ConteinerInput>
      <SubTitle>{children}</SubTitle>
      <SelectStld placeholder={placeholder}>
        <OptionStld>selecione</OptionStld>
        <OptionStld>Casa</OptionStld>
        <OptionStld>Escritório</OptionStld>
      </SelectStld>
    </ConteinerInput>
  );
};

Select.propTypes = {
  children: Proptypes.node,
  placeholder: Proptypes.string,
};
