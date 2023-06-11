import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../utils/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { DrawerActions } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { authentication } from "../../config/Firebase";

export default function Header({ navigation }) {
  const toggleDrawer = () => {
    console.log("toggle");
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const logout = () => {
    signOut(authentication);
    navigation.navigate("Login");
  };
  return (
    <View style={styles.headerContainer}>
      <Icon name="user-circle-o" size={30} style={{ marginLeft: 10 }} />
      {/* <Icon
        name="bars"
        size={30}
        onPress={() => toggleDrawer()}
        style={{ marginLeft: 10 }}
      /> */}
      <Image source={require("./../../assets/logo.png")} style={styles.logo} />
      <Icon
        name="sign-out"
        onPress={() => logout}
        size={30}
        style={{ marginRight: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 50,
    width: "100%",
  },
  logo: {
    height: 40,
    width: 40,
  },
});
