import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Signup from "./Screens/Signup/Signup.js";
import WelcomeScreen from "./Screens/Welcome/WelcomeScreen.js";
import Login from "./Screens/Login/login.js";
const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ title: "PassKey", headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          options={{ title: "", headerShown: false }}
          component={Signup}
        />
        <Stack.Screen
          name="Login"
          options={{ title: "", headerShown: false }}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
