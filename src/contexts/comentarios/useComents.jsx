import { useContext } from "react";
import { ComentarioContexto } from "./comentarioContext";

export const useComentario = () => {
  const context = useContext(ComentarioContexto);
  return context;
};
