import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils/styles";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/Firebase";

export default function SecretItem({ title, logo, emailOrUsername, id }) {
  const handleDelete = async () => {
    await deleteDoc(doc(db, "secret", id));
  };
  return (
    <View style={styles.itemContainer}>
      <View style={{ paddingLeft: 10 }}>
        <Icon name={logo} size={30} />
      </View>
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.itemHeading}>{title}</Text>
        <Text style={styles.itemDetails}>{emailOrUsername}</Text>
      </View>
      {/* <View>
        <Icon
          name="delete"
          size={20}
          color={colors.danger}
          onPress={handleDelete}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  itemHeading: {
    fontWeight: "500",
  },
  itemDetails: {
    fontWeight: "300",
  },
});
