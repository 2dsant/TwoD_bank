import React from "react";
import SignIn from "../screens/SignIn";
import ErrorView from "../screens/ErrorView";
import Login from "../screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="ErrorView" component={ErrorView} />
  </AuthStack.Navigator>
)

export default AuthRoutes;
