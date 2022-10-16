import { TitleStyled } from "./Title.styled";
import Proptypes from "prop-types";

export const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

Title.propTypes = {
  children: Proptypes.node.isRequired,
};
