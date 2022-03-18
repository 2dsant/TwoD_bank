import React from "react";
import Dashboard from "../screens/Dashboard";
import CoOwners from "../screens/CoOwners";
import CoOwnersRegister from "../screens/CoOwnersRegister";
import ErrorView from "../screens/ErrorView";
import Profile from "../screens/Profile";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Profile" component={Profile} />
    <AppStack.Screen name="CoOwners" component={CoOwners} />
    <AppStack.Screen name="CoOwnersRegister" component={CoOwnersRegister} />
    <AppStack.Screen name="ErrorView" component={ErrorView} />
  </AppStack.Navigator>
)

export default AppRoutes;