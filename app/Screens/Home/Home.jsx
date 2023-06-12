import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import Header from "../../components/Header/Header";
import SecretItem from "../../components/SecretItem/SecretItem";
import { TouchableHighlight } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { AuthContext } from "../../auth/AuthContext";
import { filter, includes } from "lodash";
export default function Home({ navigation }) {
  const [secrets, setSecrets] = useState([]);
  const { user } = useContext(AuthContext);
  const [filteredSecrets, setFilteredSecrets] = useState(secrets);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setFilteredSecrets(secrets);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const filterSecrets = (query) => {
    if (!query && query === "") setFilteredSecrets(secrets);
    else {
      const res = filter(secrets, (secret) => {
        return includes(secret, query) && secret;
      });
      setFilteredSecrets(res);
      console.log(res);
    }
  };

  useEffect(() => {
    console.log(user.uid);
    try {
      const fetchSecrets = async () => {
        const reqQuery = query(
          collection(db, "secret"),
          where("userId", "==", user.uid)
        );
        await getDocs(reqQuery).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setSecrets(newData);
          setFilteredSecrets(newData);
        });
      };
      fetchSecrets();
    } catch (error) {
      console.log(error);
    }
  }, [refreshing]);


  
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header navigation={navigation} />
      <View style={styles.mainAreaView}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => filterSecrets(text)}
            placeholder="search..."
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Your Secrets </Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {filteredSecrets.map((secret) => (
            <View style={styles.secretContainer} key={secret.id}>
              <TouchableHighlight
                style={styles.secretItemContainer}
                onPress={() => navigation.navigate("Secret", { id: secret.id })}
              >
                <SecretItem
                  title={secret.title}
                  emailOrUsername={secret.emailOrUsername}
                  logo={secret.logo}
                  id={secret.id}
                />
              </TouchableHighlight>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <TabNavigation /> */}
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
    height: 40,
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
  secretItemContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
