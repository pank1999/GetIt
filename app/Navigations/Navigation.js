import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigation from "./TabNavigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      {false ? <AuthStackNavigator /> : <TabNavigation />}
    </NavigationContainer>
  );
}
