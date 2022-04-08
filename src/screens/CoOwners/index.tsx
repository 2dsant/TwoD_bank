import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { CoOwnersList } from "../../components/CoOwnersList";
import { YellowButton } from "../../components/YellowButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCoOwnersThunk } from "../../redux/thunks/coowner";
import { RootState } from "../../redux/reducers/RootReducer";

export default function CoOwners() {
  const navigation = useNavigation<any>();
  const { coOwners } = useSelector((state: RootState) => state.coOwnersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoOwnersThunk());
  }, [coOwners])

  const handleAdd = () => {
    navigation.navigate('CoOwnersRegister')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus co-titulares</Text>
      {
        coOwners.map((item: any) => (
          <CoOwnersList name={item.nome} cellphone={item.celular} />
        ))
      }

      <View style={styles.containerButton}>
        <YellowButton title="Adicionar" onPress={handleAdd} />
      </View>
    </ScrollView>
  )
}