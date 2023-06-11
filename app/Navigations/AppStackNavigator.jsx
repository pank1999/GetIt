import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Secret from "../Screens/Secret/Secret";
import TabNavigation from "./TabNavigation";
import Icon from "react-native-vector-icons/Feather";
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
        options={{
          title: "Secret",
          headerShown: true,
          headerRight: () => (
            <Icon
              name="more-vertical"
              size={25}
              style={{ marginRight: 10 }}
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
