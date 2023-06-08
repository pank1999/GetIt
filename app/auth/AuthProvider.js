import React, { createContext } from "react";

export default function AuthProvider() {
  const AuthContext = createContext();
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    accessToken: null,
  });

  const logIn = (accessToken) => {
    setAuthState({
      isLoggedIn: true,
      accessToken: accessToken,
    });
    setToken(accessToken);
  };

  const logOut = (userId) => {
    setAuthState({
      isLoggedIn: false,
      accessToken: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
