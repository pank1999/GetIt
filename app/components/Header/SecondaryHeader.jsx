import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils/styles";
const SecondaryHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="arrowleft" size={30} style={{ marginLeft: 10 }} />
      <Text style={styles.title}>{title}</Text>
      <Icon name="user" size={30} style={{ marginRight: 10 }} />
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 50,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
