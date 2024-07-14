import React, { createContext, useContext, useState } from "react";

export const Statuscontext = createContext();
function StateContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <Statuscontext.Provider value={{ open, setOpen }}>
      {children}
    </Statuscontext.Provider>
  );
}
export const useStateContext = () => useContext(Statuscontext);
export default StateContextProvider;
