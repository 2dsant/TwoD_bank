import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import LogoPng from '../../assets/logo.png';
import MasterCardPng from '../../assets/mastercard.png';
import { YellowButton } from "../../components/YellowButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/RootReducer";
import { maskCreditCard } from "../../utils/masks";

export default function CardView() {
  const navigation = useNavigation<any>();
  const { data } = useSelector((state: RootState) => state.userDataReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu cartão</Text>

      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Image
            source={LogoPng}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.containerText}>
            <Text style={styles.nameCard}>{data.nome}</Text>
            <Text style={styles.numberCard}>{maskCreditCard(data.contas[0].cartao_credito)}</Text>
          </View>
          <Image
            source={MasterCardPng}
            resizeMode="stretch"
          />
        </View>
      </View>

      <Text style={styles.subtitle}>Fatura atual</Text>
      <Text style={styles.value}>R$ 0,00</Text>

      <View style={styles.button}>
        <YellowButton title="Voltar para a home" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
  )
}