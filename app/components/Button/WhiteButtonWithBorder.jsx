import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function WhiteButtonWithBorder({
  navigation,
  height,
  width,
  label,
}) {
  const handleClick = () => {
    if (label === "Signup") {
      console.log("signup");
      navigation.navigate("Signup");
    } else if(label === "Login")  {
      console.log("login");
      navigation.navigate("Login");
    }else if(label === "Save"){
       console.log("login");
       navigation.navigate("Secret");
    }
  };
  return (
    <TouchableOpacity
      onPress={() => handleClick()}
      style={{
        height: height,
        width: `${width}%`,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 20,
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
