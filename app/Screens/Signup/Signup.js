import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import SolidButton from "../../components/Button/SolidButton";
import WhiteButtonWithBorder from "../../components/Button/WhiteButtonWithBorder";
// import Auth from "firebase/auth";
import { auth } from "../../../Firebase";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleRegister = () => {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>SignUp</Text>
      </View>
      <View style={styles.formContainer}>
        <InputWrapper value={email} label="Email" setInputValue={setEmail} />
        <InputWrapper
          value={password}
          label="Password"
          setInputValue={setPassword}
        />
        <InputWrapper
          value={confirmPassword}
          label="Confirm Password"
          setInputValue={setConfirmPassword}
        />
        <View style={styles.buttonContainer}>
          <SolidButton
            navigation={navigation}
            handleSubmit={handleRegister}
            navigateTo="Login"
            height={50}
            width={100}
            label="Submit"
          />
        </View>
        <View style={styles.middleTextContainer}>
          <Text>OR</Text>
          <Text>Already have an account ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <WhiteButtonWithBorder
            navigation={navigation}
            height={50}
            width={100}
            label="Login"
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
