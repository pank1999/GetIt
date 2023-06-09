import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/styles";
import Icon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FoundationIcon from "react-native-vector-icons/Foundation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import AddSecret from "../Screens/AddSecret/AddSecret";
import Notes from "../Screens/Notes/Notes";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: true }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.IconContainer}>
              <EntypoIcon
                name="home"
                size={30}
                color={focused ? "orange" : "grey"}
              />
            </View>
          ),
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "black" : "grey",
                fontSize: 10,
                fontWeight: "500",
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="AddSecret"
        component={AddSecret}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="pluscircleo"
                size={30}
                color={focused ? "orange" : "grey"}
              />
            </View>
          ),
          headerShown: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "black" : "grey",
                fontSize: 10,
                fontWeight: "500",
              }}
            >
              Add Secret
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FoundationIcon
                name="clipboard-notes"
                size={23}
                color={focused ? "orange" : "grey"}
              />
            </View>
          ),
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "black" : "grey",
                fontSize: 10,
                fontWeight: "500",
              }}
            >
              Notes
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.grey,
    borderTopWidth: 1,
    width: "100%",
    height: 50,
  },
  IconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
