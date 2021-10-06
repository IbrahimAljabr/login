import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { Feather } from "react-native-vector-icons";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Title",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Title",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Title",
  },
];

export default function App() {
  const [simple, setSimple] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <Feather style={styles.icon} name='edit' />
        <TouchableOpacity onPress={() => setSimple(true)}>
          <Text style={styles.text}>Simple</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSimple(false)}>
          <Text style={styles.text}>Advanced</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data.map((item) => {
          return (
            <View style={styles.listItem}>
              <View>
                {simple ? (
                  <Text style={styles.textAdvanced}> </Text>
                ) : (
                  <Text style={styles.textAdvanced}>time</Text>
                )}
                <Text style={styles.itemText}>{item.title}</Text>
                {simple ? (
                  <Text style={styles.textAdvanced}> </Text>
                ) : (
                  <Text style={styles.textAdvanced}>spread</Text>
                )}
              </View>

              <View style={styles.listView}>
                <View>
                  {simple ? (
                    <Text style={styles.textAdvanced}> </Text>
                  ) : (
                    <Text style={styles.textAdvanced}>low</Text>
                  )}
                  <Text style={styles.itemText}>Sell</Text>
                </View>

                <View>
                  {simple ? (
                    <Text style={styles.textAdvanced}> </Text>
                  ) : (
                    <Text style={styles.textAdvanced}>high</Text>
                  )}
                  <Text style={styles.itemText}>Buy</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <Feather style={styles.iconFooter} name='menu' />
        <Feather style={styles.iconFooter} name='bar-chart' />
        <Feather style={styles.iconFooter} name='calendar' />
        <Feather style={styles.iconFooter} name='arrow-right' />
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
  headView: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#49495a",
    justifyContent: "space-around",
  },
  listView: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  iconFooter: {
    color: "#ffd03a",
    fontSize: 27,
    padding: 10,
  },
  icon: {
    color: "#ffd03a",
    fontSize: 20,
  },
  listItem: {
    width: width,
    backgroundColor: "#574c38",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemText: {
    color: "white",
    fontSize: 26,
    marginLeft: 10,
    paddingRight: 18,
  },
  textAdvanced: {
    fontSize: 7,
    marginLeft: 15,
    color: "white",
  },
});
