import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SolidButton({
  navigation,
  height,
  width,
  label,
  navigateTo,
  handleSubmit,
}) {
  const handleClick = () => {
    handleSubmit();
  };
  return (
    <TouchableOpacity
      onPress={() => handleClick()}
      style={{
        height: height,
        width: `${width}%`,
        backgroundColor: "#FFB636",
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginTop: 30,
      }}
      height={height}
      width={width}
    >
      <View>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonLabel: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});
