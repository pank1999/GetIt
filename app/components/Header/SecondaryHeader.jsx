import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import { colors } from "../../utils/styles";
const SecondaryHeader = ({
  title,
  rightIconName,
  rightFunction,
  navigation,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Icon
        name="arrowleft"
        onPress={() => navigation.goBack()}
        size={30}
        style={{ paddingLeft: 10 }}
      />
      <Text style={styles.title}>{title}</Text>
      {rightIconName ? (
        <Icon
          name={rightIconName}
          size={25}
          style={{ marginRight: 30 }}
          onPress={() => rightFunction()}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 50,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
