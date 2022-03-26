import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { CoOwnersList } from "../../components/CoOwnersList";
import { YellowButton } from "../../components/YellowButton";
import { useNavigation } from "@react-navigation/native";

export default function CoOwners() {
  const navigation = useNavigation<any>();

  const handleAdd = () => {
    navigation.navigate('CoOwnersRegister')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus co-titulares</Text>
      <CoOwnersList />

      <View style={styles.containerButton}>
        <YellowButton title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}