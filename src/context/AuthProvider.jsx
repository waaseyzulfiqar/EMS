import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  return (
    <div>
      <AuthContext.Provider value={'Waasey'}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
