import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../utils/styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Icon name="bars" size={30} style={{ marginLeft: 10 }} />
      <Image source={require("./../../assets/logo.png")} style={styles.logo} />
      <Icon name="user-circle-o" size={30} style={{ marginRight: 10 }} />
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
