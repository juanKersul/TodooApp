import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const getAccessToken = () => {
    return accessToken;
  };
  const saveAccessToken = (token) => {
    setIsAuthenticated(true);
    setAccessToken(token);
  };
  const removeAccessToken = () => {
    setIsAuthenticated(false);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        saveAccessToken,
        removeAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
