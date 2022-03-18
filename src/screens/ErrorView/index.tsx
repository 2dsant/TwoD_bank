import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function ErrorView() {
  return (
    <View style={styles.container}>
      <Text>Error view works!</Text>
    </View>
  )
}