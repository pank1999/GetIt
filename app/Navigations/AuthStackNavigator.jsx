import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Signup from "../Screens/Signup/Signup";
import WelcomeScreen from "../Screens/Welcome/WelcomeScreen";
import Login from "../Screens/Login/login";
import Home from "../Screens/Home/Home";
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "PassKey", headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        options={{ title: "", headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        options={{ title: "", headerShown: false }}
        component={Signup}
      />
    </Stack.Navigator>
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
