import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/styles";
import Icon from "react-native-vector-icons/AntDesign";

export default function BottomTabNavigation() {
  return (
    <View style={styles.bottomContainer}>
      <Icon name="pluscircle" size={40} />
    </View>
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
});
