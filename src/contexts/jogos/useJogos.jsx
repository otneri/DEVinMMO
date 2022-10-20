import { useContext } from "react";
import { JogosContexto } from "./jogosContext";

export const useJogos = () => {
  const context = useContext(JogosContexto);
  return context;
};
