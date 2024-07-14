import React, { createContext, useContext, useEffect, useState } from "react";
import useMasterHook from "../../hooks/user/UseMasterHook";

export const Mastercontext = createContext();

function MastercontextProvider({ children }) {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, isLoading] = useState(true);
  const { getList } = useMasterHook();

  useEffect(() => {
    getList({ setList, isLoading });
  }, []);

  return (
    <Mastercontext.Provider
      value={{ setList, list, open, setOpen, loading, isLoading }}
    >
      {children}
    </Mastercontext.Provider>
  );
}
export const useMasterContext = () => useContext(Mastercontext);
export default MastercontextProvider;
