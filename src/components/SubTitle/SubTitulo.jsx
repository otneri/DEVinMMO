import { SubTitleStyled, SubParagraphStld } from "./SubTitle.styled";
import Proptypes from "prop-types";

export const SubTitle = ({ children }) => {
  return <SubTitleStyled>{children}</SubTitleStyled>;
};

export const SubParagraph = ({ children, size }) => {
  return <SubParagraphStld sz={size}>{children}</SubParagraphStld>;
};

SubTitle.propTypes = {
  children: Proptypes.node,
};

SubParagraph.propTypes = {
  children: Proptypes.node.isRequired,
  size: Proptypes.string,
};
