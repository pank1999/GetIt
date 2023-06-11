import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import AppStackNavigator from "./AppStackNavigator";
import { AuthContext } from "../auth/AuthContext";

export default function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStackNavigator /> : <AppStackNavigator />}
    </NavigationContainer>
  );
}
