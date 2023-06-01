import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../utils/styles";

export default function SecretItem() {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Icon name="google" size={30} />
      </View>
      <View>
        <Text>Gmail</Text>
        <Text>pankajpandey@gmail.com</Text>
      </View>
      <View>
        <Icon name="arrow-circle-right" size={30} color={colors.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.grey,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});