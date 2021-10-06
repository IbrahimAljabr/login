import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>We Will Send You A Massage To</Text>
      <TouchableOpacity onPress={() => navigation.navigate("logo")}>
        <Text style={styles.text}>0791234567</Text>
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
  text: {
    color: "white",
    marginBottom: 40,
  },
});
