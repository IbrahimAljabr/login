import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

import logo from "../../assets/logo.png";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
      <Text style={styles.text}>Sign Up</Text>

      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Phone Number' />
      <TextInput style={styles.input} placeholder='Region' />

      <TouchableOpacity style={styles.button} onPress={() => navigation.push("loginPage")}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242438",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 135,
    height: 135,
    marginBottom: 10,
  },
  text: {
    color: "white",
    marginBottom: 40,
  },
  input: {
    borderColor: "#ffd03a",
    borderBottomWidth: 1,
    paddingBottom: 3,
    textAlign: "left",
    color: "#ffd03a",
    marginTop: 25,
    width: width - 50,
  },
  button: {
    backgroundColor: "#ffd03a",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 70,
    marginBottom: 12,
    paddingTop: 3,
    paddingBottom: 3,
    marginRight: 10,
    width: 160,
  },
});
