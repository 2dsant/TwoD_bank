import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Background } from "../components/Background";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { connect } from "react-redux";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Routes = ({ user }: any) => {
  return (
    <Background>
      {
        <NavigationContainer theme={MyTheme}>
          {
            !user?.username ? <AuthRoutes /> : <AppRoutes />
          }
        </NavigationContainer>
      }
    </Background>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.loginReducer.user
});

export default connect(mapStateToProps)(Routes);