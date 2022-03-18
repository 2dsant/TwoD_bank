import React from "react";
import SignIn from "../screens/SignIn";
import ErrorView from "../screens/ErrorView";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Signin" component={SignIn} />
    <AuthStack.Screen name="ErrorView" component={ErrorView} />
  </AuthStack.Navigator>
)

export default AuthRoutes;
