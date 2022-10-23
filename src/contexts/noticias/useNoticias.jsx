import { useContext } from "react";
import { NoticiasContexto } from "./noticiasContext";

export const useNoticia = () => {
  const context = useContext(NoticiasContexto)
  ;
  return context;
};
