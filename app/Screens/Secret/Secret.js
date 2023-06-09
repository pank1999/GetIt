import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../utils/styles";
import WhiteButtonWithBorder from "../../components/Button/WhiteButtonWithBorder";
import ActionSheet from "react-native-actions-sheet";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { Icons } from "../../utils/constant";
import { Touchable } from "react-native";
import { TouchableHighlight } from "react-native";

const Secret = ({ navigation }) => {
  const actionSheetRef = useRef(null);
  const [selectedIcon, setSelectedIcon] = useState();

  return (
    <SafeAreaView>
      <View style={styles.addSecretContainer}>
        <View style={styles.formContainer}>
          <View style={styles.secretIcon}>
            <AntDesignIcon name={selectedIcon} size={50} />
            <View style={styles.editIcon}>
              <FontAwesomeIcon
                name="pencil"
                onPress={() => actionSheetRef.current?.show()}
                size={20}
              />
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.Item}>
              <Text>Email/Username</Text>
              <FontAwesomeIcon name="pencil" size={15} />
            </View>
            <View style={styles.ItemBottom}>
              <Text>pankajpandey@gmail.com</Text>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.Item}>
              <Text>Password</Text>
              <FontAwesomeIcon name="pencil" size={15} />
            </View>
            <View style={styles.ItemBottom}>
              {/* <TextInput style={styles.input} /> */}
              <Text>*********</Text>
              <FontAwesomeIcon name="eye" size={20} />
            </View>
          </View>
          <View style={styles.formButton}>
            <WhiteButtonWithBorder
              navigation={navigation}
              height={50}
              width={100}
              label="Save"
            />
          </View>
        </View>
      </View>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheet}>
          <View style={styles.IconContainer}>
            {Icons.map((IconItem, index) => (
              <AntDesignIcon
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
    </SafeAreaView>
  );
};

export default Secret;

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
  ItemContainer: {
    justifyContent: "center",
    marginTop: 20,
    width: "80%",
  },
  Item: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ItemBottom: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  formButton: {
    width: "80%",
    marginTop: "60%",
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
  //   input: {
  //     height: 30,
  //     width: "100%",
  //     borderStyle: "solid",
  //     // borderWidth: 1,
  //     // borderColor: "#A9A9A9",
  //     borderRadius: 45,
  //     paddingLeft: 20,
  //   },
});
