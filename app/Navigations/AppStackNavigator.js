import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Secret from "../Screens/Secret/Secret";
import TabNavigation from "./TabNavigation";

export default function AppStackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        options={{ title: "", headerShown: false }}
        component={TabNavigation}
      />
      <Stack.Screen
        name="Secret"
        component={Secret}
        options={{ title: "Secret", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
