import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";

const test = () => {
  for (let index = 0; index < 5; index++) {}
};

export default function Logo({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("loginPage")}>
        <Image source={logo} style={styles.image}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242438",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 155,
    height: 155,
  },
});
