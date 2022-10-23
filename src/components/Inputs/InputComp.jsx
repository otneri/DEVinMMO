import {
  InputStyled,
  ConteinerInput,
  InputErrorStyled,
  InputSearchstld,
  DivSearchstld,
} from "./InputComp.styled";
import { forwardRef } from "react";
import Proptypes from "prop-types";

export const Input = forwardRef((props, ref) => (
  <InputStyled {...props} ref={ref}></InputStyled>
));

Input.displayName = "Input";

export const InputError = forwardRef((props, ref) => (
  <InputErrorStyled {...props} ref={ref} />
));

InputError.displayName = "Input";

export const InputSearch = ({ type, onChange, placeholder, children }) => {
  return (
    <DivSearchstld>
      <InputSearchstld
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      >
        {children}
      </InputSearchstld>
    </DivSearchstld>
  );
};

InputSearch.propTypes = {
  children: Proptypes.node,
  type: Proptypes.node,
  onChange: Proptypes.node,
  placeholder: Proptypes.string,
};
