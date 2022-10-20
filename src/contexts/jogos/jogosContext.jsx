import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const JogosContexto = createContext({
    jogos: null,
    setJogos: () =>{}
});

export const Jogo = ({ children }) => {
  const [jogos, setJogos] = useState();

  return (
    <JogosContexto.Provider value={{ jogos, setJogos }}>
      {children}
    </JogosContexto.Provider>
  );
};

Jogo.propTypes = {
  children: PropTypes.array,
};
