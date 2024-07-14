import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

//CODE_ROLES
//SUPER_ADMIN -425
//MASTER - 420
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthcontext = () => useContext(AuthContext);
export default AuthContext;
