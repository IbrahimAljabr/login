import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Phone Number' />

      <TouchableOpacity style={styles.button} onPress={() => navigation.push("resetMassage")}>
        <Text>Reset Password</Text>
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
