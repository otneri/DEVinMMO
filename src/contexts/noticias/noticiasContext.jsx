
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NoticiasContexto = createContext({
    sitenoticia: null,
    setSitenoticia: () =>{}
});

export const NoticiaProvider = ({ children }) => {
  const [sitenoticia, setSitenoticia] = useState();

  return (
    <NoticiasContexto.Provider value={{ sitenoticia, setSitenoticia }}>
      {children}
    </NoticiasContexto.Provider>
  );
};

NoticiaProvider.propTypes = {
  children: PropTypes.array,
};
