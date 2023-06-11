import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    accessToken: null,
    user: {},
  });

  const logIn = (accessToken, user) => {
    setAuthState({
      isLoggedIn: true,
      accessToken: accessToken,
      user,
    });
  };

  const logOut = (userId) => {
    setAuthState({
      isLoggedIn: false,
      accessToken: null,
      user: {},
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, logIn, logOut, AuthContext }}>
      {children}
    </AuthContext.Provider>
  );
}
