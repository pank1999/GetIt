import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../../auth/AuthContext";

const Profile = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <SecondaryHeader
        title="Profile"
        rightIconName="edit"
        navigation={navigation}
      />
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}>
          <FontAwesomeIcon name={"user-circle-o" ?? ""} size={50} />
          <View style={styles.editIcon}>
            <FontAwesomeIcon
              name="pencil"
              onPress={() => actionSheetRef.current?.show()}
              size={20}
            />
          </View>
        </View>
        <View style={styles.userDetailsContainer}>
          <View style={styles.detailsItem}>
            <Text style={styles.label}>Email : </Text>
            <Text>{user.email}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "10%",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#FFD178",
    justifyContent: "center",
    alignItems: "center",
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
  userDetailsContainer: {
    marginTop: 50,
  },
  detailsItem: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
  },
});
