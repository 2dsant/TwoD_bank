import React from "react";
import { useForm } from "react-hook-form";
import { View, Text, ScrollView } from "react-native";
import { CustomInputText } from "../../components/CustomInputText";
import { YellowButton } from "../../components/YellowButton";
import { styles } from "./styles";
import { maskCpf, maskPhone, maskDateToSave, maskCpfToSave, maskDateCoOwner } from "../../utils/masks";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../redux/services/api";

export default function CoOwnersRegister() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation<any>();

  function handleSaveCoOwner(value: any) {
    const data = {
      nome: value.name,
      email: value.email,
      cpf: maskCpfToSave(value.cpf),
      dataNasc: maskDateToSave(value.birthday),
      celular: value.telephone,
      descricao: value.description
    }
    api.post('/co-titular', data).then(({ data }) => {
      navigation.navigate('CoOwners')
    }).catch((error) => {
      console.log(error.response.request._response)
    });
  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
      <Text style={styles.title}>Adicionar Co-Titular</Text>

      <CustomInputText
        errors={errors}
        control={control}
        name="name"
        placeholder='nome completo'
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="email"
        placeholder='email'
        keyboardType="email-address"
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="cpf"
        placeholder='cpf'
        mask={maskCpf}
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="birthday"
        placeholder='DD-MM-YYYY'
        keyboardType='numeric'
        mask={maskDateCoOwner}
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="telephone"
        placeholder='(99)99999-9999)'
        keyboardType='phone-pad'
        mask={maskPhone}
        rules={{
          required: 'Campo obrigatório.'

        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        numberOfLines={5}
        name="description"
        placeholder='descrição'
        multiline
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.textInput}
      />

      <View style={styles.containerButton}>
        <YellowButton title="Salvar" onPress={handleSubmit((value) => handleSaveCoOwner(value))} />
      </View>
    </ScrollView>
  )
}