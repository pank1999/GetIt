import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SecondaryHeader from "./../../components/Header/SecondaryHeader";

const Notes = ({ navigation }) => {
  return (
    <SafeAreaView>
      <SecondaryHeader title="Notes" navigation={navigation} />
      <View>
        <Text>Notes</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({});
