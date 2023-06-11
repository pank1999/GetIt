import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
  StatusBar,
} from "react-native";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import SolidButton from "../../components/Button/SolidButton";
import WhiteButtonWithBorder from "../../components/Button/WhiteButtonWithBorder";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../config/Firebase";
import { AuthContext } from "../../auth/AuthContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { logIn } = useContext(AuthContext);
  const handleLogin = () => {
    console.log(email, password);
    signInWithEmailAndPassword(authentication, email, password).then((user) => {
      if (user) {
        logIn(user._tokenResponse.idToken, user.user);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.footer}>
        <Image
          source={require("./../../assets/logo.png")}
          style={{ height: 60, width: 60 }}
        />
        <Text style={styles.title}>PassKey</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        {/* <InputWrapper label="Email" /> */}
        <InputWrapper label="Email" setInputValue={setEmail} />
        <InputWrapper label="Password" setInputValue={setPassword} />
        <View style={styles.buttonContainer}>
          <SolidButton
            navigation={navigation}
            height={50}
            width={100}
            label="Submit"
            handleSubmit={handleLogin}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    alignItems: "center",
    fontWeight: "600",
  },
  heading: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "600",
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
    paddingTop: 30,
  },
});
