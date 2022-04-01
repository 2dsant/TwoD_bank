import React from "react";
import { useForm } from "react-hook-form";
import { View, Text } from "react-native";
import { CustomInputText } from "../../components/CustomInputText";
import { YellowButton } from "../../components/YellowButton";
import { styles } from "./styles";
import { maskCpf, maskPhone, maskDate, noMask } from "../../utils/masks";
import { useNavigation } from "@react-navigation/native";

export default function CoOwnersRegister() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Co-Titular</Text>
      <CustomInputText
        errors={errors}
        control={control}
        name="cpf"
        placeholder='000.000.000-00'
        border
        mask={maskCpf}
        rules={{
          required: 'Campo obrigatório.'
        }}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="Nome"
        placeholder='nome completo'
        border
        mask={noMask}
        rules={{
          required: 'Campo obrigatório.'
        }}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="DataNascimento"
        placeholder='DD-MM-YYYY'
        keyboardType='numeric'
        border
        mask={maskDate}
        rules={{
          required: 'Campo obrigatório.'
        }}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="Celular"
        placeholder='(99)99999-9999)'
        keyboardType='phone-pad'
        border
        mask={maskPhone}
        rules={{
          required: 'Campo obrigatório.'
        }}
      />
      <View style={styles.containerButton}>
        <YellowButton title="Salvar" onPress={handleSubmit(() => navigation.navigate('ErrorView'))} />
      </View>
    </View>
  )
}