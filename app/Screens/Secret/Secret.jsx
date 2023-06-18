import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../utils/styles";
import WhiteButtonWithBorder from "../../components/Button/WhiteButtonWithBorder";
import ActionSheet from "react-native-actions-sheet";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { Icons } from "../../utils/constant";
import { TouchableHighlight } from "react-native";
import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import SecondaryHeader from "../../components/Header/SecondaryHeader";

const Secret = ({ navigation, route }) => {
  const { id } = route.params;
  const [secret, setSecret] = useState({});
  const [selectedIcon, setSelectedIcon] = useState();
  const [hidePassword, setHidePassword] = useState(true);

  // const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "secret", id))
      .then(() => {
        alert("secret has been deleted");
        navigation.navigate("Home");
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const getSecret = async () => {
      try {
        const docRef = doc(db, "secret", id);
        await getDoc(docRef).then((querySnapshot) => {
          const secretData = querySnapshot.data();
          setSecret(secretData);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSecret();
  }, []);
  const actionSheetRef = useRef(null);

  return (
    <SafeAreaView>
      <SecondaryHeader
        title="Secret"
        rightIconName="delete"
        navigation={navigation}
        isDelete
        rightFunction={handleDelete}
      />
      <View style={styles.addSecretContainer}>
        <View style={styles.formContainer}>
          <View style={styles.secretIcon}>
            <AntDesignIcon name={secret.logo} size={50} />
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
              <Text>{secret.emailOrUsername}</Text>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <View style={styles.Item}>
              <Text>Password</Text>
              <FontAwesomeIcon name="pencil" size={15} />
            </View>
            <View style={styles.ItemBottom}>
              {hidePassword ? (
                <>
                  <Text>********</Text>
                  <FontAwesomeIcon
                    name="eye"
                    size={20}
                    onPress={() => setHidePassword(false)}
                  />
                </>
              ) : (
                <>
                  <Text>{secret.password}</Text>
                  <FontAwesomeIcon
                    name="eye-slash"
                    size={20}
                    onPress={() => setHidePassword(true)}
                  />
                </>
              )}
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

        {/* Delete Modal */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you want to sure delete the secret ?
              </Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => handleDelete()}
                >
                  <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>

      {/* edit icon action sheet */}
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
  deleteButton: {
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: "10px 20px",
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "orange",
  },
  deleteButton: {
    backgroundColor: "red",
    marginLeft: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
