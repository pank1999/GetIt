import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

export default function InputWrapper({ label, setInputValue, showLabel }) {
  return (
    <View style={styles.inputContainer}>
      {showLabel ? <Text style={styles.label}> {label} </Text> : ""}
      <TextInput
        style={styles.input}
        placeholder={showLabel ? "" : label}
        onChangeText={(text) => {
          setInputValue(text);
        }}
      />
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
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 45,
    paddingLeft: 20,
  },
  label: {
    fontSize: 14,
    paddingBottom: 5,
  },
});
