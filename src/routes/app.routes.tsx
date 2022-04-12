import React from "react";
import Dashboard from "../screens/Dashboard";
import CoOwners from "../screens/CoOwners";
import CoOwnersRegister from "../screens/CoOwnersRegister";
import ErrorView from "../screens/ErrorView";
import Profile from "../screens/Profile";
import UserData from "../screens/UserData";
import CardView from "../screens/CardView";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerHome = () => (
  <Drawer.Navigator screenOptions={{
    headerShown: false,
  }}
    drawerContent={(props) => <Profile />}
  >
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* <AppStack.Screen name="Dashboard" component={Dashboard} /> */}
    <AppStack.Screen
      name="DrawerHome"
      component={DrawerHome}
    />
    <AppStack.Screen name="UserData" component={UserData} />
    <AppStack.Screen name="CardView" component={CardView} />
    <AppStack.Screen name="CoOwners" component={CoOwners} />
    <AppStack.Screen name="CoOwnersRegister" component={CoOwnersRegister} />
    <AppStack.Screen name="ErrorView" component={ErrorView} />
  </AppStack.Navigator>
)

export default AppRoutes;