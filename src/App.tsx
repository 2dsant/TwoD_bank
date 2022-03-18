import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App;