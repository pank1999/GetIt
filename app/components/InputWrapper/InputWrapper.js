import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

export default function InputWrapper({ label }) {
  return (
    <View style={styles.inputContainer}>
      {/* <Text style={styles.label}> {label} </Text> */}
      <TextInput style={styles.input} placeholder={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    width: "100%",
    paddingHorizontal: "10%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    // backgroundColor: "#F3F3F3",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 45,
    paddingLeft: 10,
  },
  label: {
    fontSize: 14,
    paddingBottom: 5,
  },
});
