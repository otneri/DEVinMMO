import {InputStyled, ConteinerInput,InputErrorStyled } from "./InputComp.styled";
import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <InputStyled {...props} ref={ref}></InputStyled>
));


Input.displayName = "Input";

export const InputError = forwardRef((props, ref) => (
  <InputErrorStyled {...props} ref={ref} />
));

InputError.displayName = "Input";

