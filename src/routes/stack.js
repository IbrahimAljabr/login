import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logoPage from "../screens/logo";
import loginPage from "../screens/loginPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName='logo'>
      <Stack.Screen name='logo' component={logoPage} />
      <Stack.Screen name='loginPage' component={loginPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
