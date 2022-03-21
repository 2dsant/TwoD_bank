import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Background } from "../components/Background";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Routes = () => {

  return (
    <Background>
      <NavigationContainer theme={MyTheme}>
        <AuthRoutes />
      </NavigationContainer>
    </Background>
  )
}

export default Routes;