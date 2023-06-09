import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigation from "./TabNavigation";
import AppStackNavigator from "./AppStackNavigator";

export default function Navigation() {
  return (
    <NavigationContainer>
      {false ? <AuthStackNavigator /> : <AppStackNavigator />}
    </NavigationContainer>
  );
}
