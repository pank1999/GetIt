import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import BottomTabNavigation from "../../components/BottomTabNavigation/BottomTabNavigation";
import Header from "../../components/Header/Header";
import SecretItem from "../../components/SecretItem/SecretItem";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <View style={styles.mainAreaView}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder="search..." />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Your Secrets </Text>
        </View>
        <ScrollView>
          <View style={styles.secretContainer}>
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
            <SecretItem />
          </View>
        </ScrollView>
      </View>
      <BottomTabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  mainAreaView: {
    flex: 10,
    width: "100%",
  },
  searchContainer: {
    height: 30,
    width: "80%",
    marginHorizontal: "10%",
    marginTop: 10,
  },
  input: {
    height: 50,
    width: "100%",
    // backgroundColor: "#F3F3F3",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 45,
    paddingLeft: 10,
  },
  headingContainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 20,
  },
  secretContainer: {
    paddingHorizontal: "5%",
  },
});