import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from "react-native";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import SolidButton from "../../components/Button/SolidButton";
import WhiteButtonWithBorder from "../../components/Button/WhiteButtonWithBorder";

import { auth } from "./../../../Firebase.js";

export default function Login({ navigation }) {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    auth
      .createUserWithEmailAndPassword(loginDetails.email, loginDetails.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        {/* <InputWrapper label="Email" /> */}
        <InputWrapper label="Phone Number" />
        <InputWrapper label="Password" />
        <View style={styles.buttonContainer}>
          <SolidButton
            navigation={navigation}
            // navigateTo=""
            height={50}
            width={100}
            label="Submit"
          />
        </View>
        <View style={styles.middleTextContainer}>
          <Text>OR</Text>
          <Text>Don't have an account ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <WhiteButtonWithBorder
            navigation={navigation}
            height={50}
            width={100}
            label="Signup"
          />
        </View>
        <View style={styles.footer}>
          <Image
            source={require("./../../assets/logo.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text>PassKey</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    alignItems: "center",
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  buttonContainer: {
    marginHorizontal: "10%",
  },
  middleTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
});
