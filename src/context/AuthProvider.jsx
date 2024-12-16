import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  
  const { children } = props;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const {employeesData} = getLocalStorage();
    setUserData(employeesData);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
