import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import { Feather } from "react-native-vector-icons";
import avatar from "../../assets/profile.png";
import logo from "../../assets/logo.png";

const pressing = () => {
  console.log("test");
};
export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <View style={styles.headUser}>
          <Image source={avatar} style={styles.profile}></Image>
          <Text style={styles.text}>User Name</Text>
        </View>
        <Feather name='menu' style={styles.menu} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image}></Image>
        <Text style={styles.text}>Account List</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.push("itemList")}>
          <View style={styles.headView}>
            <Text style={styles.cardText}>1234567</Text>
            <View>
              <Text style={styles.cardText}>JOD</Text>
              <Text style={styles.cardText}>Jordan gold</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("itemList")}>
          <View style={styles.headView}>
            <Text style={styles.cardText}>1234567</Text>
            <View>
              <Text style={styles.cardText}>EGP</Text>
              <Text style={styles.cardText}>egypt gold</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242438",
  },
  imageContainer: {
    backgroundColor: "#242438",
    alignItems: "center",
  },
  text: {
    color: "white",
    margin: 10,
  },
  image: {
    width: 135,

    height: 135,
    marginBottom: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 75 / 2,
  },
  menu: {
    width: 50,
    height: 50,
    color: "#ffd03a",
    fontSize: 24,
  },
  headView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 35,
    marginBottom: 50,
  },
  headText: {
    flexDirection: "row",
    padding: 10,
  },
  headUser: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#494138",
    borderRadius: 12,
    justifyContent: "center",
    width: width - 50,
    height: 66,
    marginTop: 20,
  },
  cardText: {
    textAlign: "center",
    color: "white",
    paddingBottom: 2,
  },
});
