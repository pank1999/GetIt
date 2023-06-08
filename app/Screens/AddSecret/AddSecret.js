import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import SolidButton from "../../components/Button/SolidButton";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import ActionSheet from "react-native-actions-sheet";

const AddSecret = ({ navigation }) => {
  const actionSheetRef = useRef(null);
  const [selectedIcon, setSelectedIcon] = useState();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Icons = ["facebook-square", "instagram", "google", "twitter"];
  const onSubmit = () => {
    const secretDetails = {
      title,
      email,
      password,
      logo: selectedIcon,
    };
    console.log({ secretDetails });
    setEmail("");
    setPassword("");
    setTitle("");
    setSelectedIcon("");
    navigation.navigate("Home");
  };
  return (
    <View style={styles.wrapper}>
      <StatusBar />
      <SecondaryHeader title="Add secret" />
      <View style={styles.addSecretContainer}>
        <View style={styles.formContainer}>
          <View style={styles.secretIcon}>
            <Icon name={selectedIcon ?? ""} size={50} />
            <View style={styles.editIcon}>
              <FontAwesomeIcon
                name="pencil"
                onPress={() => actionSheetRef.current?.show()}
                size={20}
              />
            </View>
          </View>
          <View style={styles.formItem}>
            <InputWrapper label="Title" setInputValue={setTitle} showLabel />
          </View>
          <View style={styles.formItem}>
            <InputWrapper
              label="Email/Username"
              showLabel
              setInputValue={setEmail}
            />
          </View>
          <View style={styles.formItem}>
            <InputWrapper
              label="Password"
              showLabel
              setInputValue={setPassword}
            />
          </View>
          <View style={styles.formButton}>
            <SolidButton
              navigation={navigation}
              height={50}
              width={100}
              label="Save"
              handleSubmit={onSubmit}
            />
          </View>
        </View>
      </View>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheet}>
          <View style={styles.IconContainer}>
            {Icons.map((IconItem, index) => (
              <Icon
                name={IconItem}
                key={index}
                onPress={() => {
                  setSelectedIcon(IconItem);
                  actionSheetRef.current?.hide();
                }}
                size={30}
                style={styles.Icon}
              />
            ))}
          </View>
          <TouchableHighlight onPress={() => actionSheetRef.current?.hide()}>
            <Text style={styles.close}>Close</Text>
          </TouchableHighlight>
        </View>
      </ActionSheet>
    </View>
  );
};

export default AddSecret;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
  },
  addSecretContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "10%",
  },
  secretIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#FFD178",
    justifyContent: "center",
    alignItems: "center",
  },
  formItem: {
    marginTop: 20,
    width: "100%",
  },
  formButton: {
    width: "80%",
    marginTop: "20%",
  },
  editIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 70,
    top: 70,
    backgroundColor: "orange",
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  actionSheet: {
    height: "50%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  close: {
    fontSize: 16,
  },
  IconContainer: {
    width: "100%",
    height: 270,
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 10,
  },
  Icon: {
    padding: 10,
  },
});
