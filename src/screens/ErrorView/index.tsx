import React from "react";
import { View, Text, Image } from "react-native";
import ErrorPng from '../../assets/error.png';
import { styles } from "./styles";
import { WhiteButton } from "../../components/WhiteButton";
import { useNavigation } from "@react-navigation/native";

export default function ErrorView() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image source={ErrorPng} style={styles.image} resizeMode="cover" />

      <Text style={styles.title}>Algo deu errado. Sentimos muito :(</Text>

      <WhiteButton title="Voltar para a home" onPress={() => navigation.navigate("Dashboard")} />
    </View>
  )
}