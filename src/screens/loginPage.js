import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  CheckBox,
  Dimensions,
} from "react-native";
import logo from "../../assets/logo.png";
import avatar from "../../assets/profile.png";

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
      <Image source={avatar} style={styles.profile}></Image>
      <Text style={styles.text}>User Name</Text>
      <TextInput style={styles.input} placeholder='User Name or Email' />
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input} placeholder='***********' />
      <View style={styles.checkboxView}>
        <CheckBox style={styles.checkbox} />
        <Text style={styles.text}>Show password</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push("accountList")}>
        <Text>Login in</Text>
      </TouchableOpacity>
      <View style={styles.checkboxView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("signUp")}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("resetPassword")}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
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
  },
  profile: {
    width: 75,
    height: 75,
    marginTop: 50,
    marginBottom: 40,
    borderColor: "#ffd03a",
    borderWidth: 4,
    borderRadius: 75 / 2,
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#ffd03a",
    borderRadius: 12,
    marginTop: 25,
    marginBottom: 12,
    paddingTop: 3,
    paddingBottom: 3,
    marginRight: 10,
    alignItems: "center",
    width: 160,
  },
  checkboxView: {
    flexDirection: "row",
    outlineColor: "#ffd03a",
  },
  checkbox: {
    margin: "auto",
    marginRight: 10,
  },
  input: {
    width: width / 2,
    backgroundColor: "#ffd03a",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    textAlign: "center",
  },
});
