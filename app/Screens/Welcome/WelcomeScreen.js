import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import SolidButton from "../../components/Button/SolidButton";

export default function WelcomeScreen({ navigation }) {
  const handleClick = () => {
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("./../../assets/welcome-screen.png")}
    >
      <SolidButton
        navigation={navigation}
        height={50}
        width={70}
        label="Get Started"
        handleSubmit={handleClick}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
