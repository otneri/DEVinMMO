import { useContext } from "react";
import { SelectContexto } from "./selectContext";

export const useSelect = () => {
  const context = useContext(SelectContexto);
  return context;
};
