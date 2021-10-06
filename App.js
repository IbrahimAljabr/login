import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logoPage from "./src/screens/logo";
import loginPage from "./src/screens/loginPage";
import signUp from "./src/screens/signUp";
import resetPassword from "./src/screens/resetPassword";
import resetMassage from "./src/screens/resetMassage";
import accountList from "./src/screens/acountList";
import itemList from "./src/screens/itemList";

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='logo' component={logoPage} options={{ headerShown: false }} />
        <AuthStack.Screen name='loginPage' component={loginPage} options={{ headerShown: false }} />
        <AuthStack.Screen name='signUp' component={signUp} options={{ headerShown: false }} />
        <AuthStack.Screen
          name='resetPassword'
          component={resetPassword}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='resetMassage'
          component={resetMassage}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name='accountList'
          component={accountList}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen name='itemList' component={itemList} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
