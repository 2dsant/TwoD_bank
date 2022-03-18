import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation<any>();


  return (
    <View style={styles.container}>
      <Text>Dashboard works!!!!!</Text>
      <Button title="CoOwners" onPress={() => navigation.navigate('CoOwners')} />
      <Button title="CoOwnersRegister" onPress={() => navigation.navigate('CoOwnersRegister')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="ErrorView" onPress={() => navigation.navigate('ErrorView')} />
    </View>
  )
}