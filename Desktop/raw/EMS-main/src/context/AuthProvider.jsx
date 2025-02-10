import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [Userdata, setUserdata] = useState(null)

    useEffect(()=>{
          const localStorageData = getLocalStorage()         
          setUserdata(localStorageData)
    }, [])
  return (
    <div>
      <AuthContext.Provider value={Userdata}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
