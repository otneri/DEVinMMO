import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ComentarioContexto = createContext({
    comentariopost: null,
    setComentariopost: () =>{}
});

export const ComentarioProvider = ({ children }) => {
  const [comentariopost, setComentariopost] = useState();

  return (
    <ComentarioContexto.Provider value={{ comentariopost, setComentariopost }}>
      {children}
    </ComentarioContexto.Provider>
  );
};

ComentarioProvider.propTypes = {
  children: PropTypes.array,
};
