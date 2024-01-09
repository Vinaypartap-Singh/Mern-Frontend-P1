import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // Check Weather user is logged in or not

  let isLoggedIn = !token;

  // LogOut Functionality

  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storeInLS, LogOutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("Outside of Auth Context");
  }
  return authContextValue;
};
