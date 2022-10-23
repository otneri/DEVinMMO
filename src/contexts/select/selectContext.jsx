import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SelectContexto = createContext({
    select: null,
    setSelect: () => {}
});

export const SelectProvider = ({ children }) => {
  const [select, setSelect] = useState();

  return (
    <SelectContexto.Provider value={{ select, setSelect }}>
      {children}
    </SelectContexto.Provider>
  );
};

SelectProvider.propTypes = {
  children: PropTypes.node,
};
