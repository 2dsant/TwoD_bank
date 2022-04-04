import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { YellowButton } from '../../components/YellowButton';
import { RootState } from '../../redux/reducers/RootReducer';
import { styles } from './style';
import { useForm } from 'react-hook-form';
import { CustomInputText } from '../../components/CustomInputText';
import { maskDate, maskPhone, maskCep } from '../../utils/masks';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { apiCep } from '../../redux/services/Cep/apiCep';


export default function UserData() {
  const { user } = useSelector((state: RootState) => state.loginReducer);
  const navigation = useNavigation<any>();

  async function onSearchCep() {
    const cep = control._getWatch('cep');
    const { data } = await apiCep.get(`${apiCep.defaults.baseURL}/${cep}/json/`)
    setValue('cep', data.cep)
    setValue('street', data.logradouro)
    setValue('neighborhood', data.bairro)
    setValue('city', data.localidade)
    setValue('uf', data.uf)
  }

  const { control, setValue, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: `${user.name}`,
      email: `${user.email}`,
      telephone: maskPhone(user.telephone),
      birthday: maskDate(user.birthday),
      description: `${user.description}`,
      cep: `${user.address.cep}`,
      street: `${user.address.street}`,
      number: `${user.address.number}`,
      neighborhood: `${user.address.neighborhood}`,
      city: `${user.address.city}`,
      uf: `${user.address.uf}`
    }
  });


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Dados</Text>

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

      <View style={styles.cepContainer}>
        <CustomInputText
          errors={errors}
          control={control}
          name="cep"
          placeholder='cep'
          keyboardType='numeric'
          mask={maskCep}
          rules={{
            required: 'Campo obrigatório.'
          }}
          customStyle={styles.inputCep}
        />
        <Button title='Buscar' onPress={onSearchCep} style={styles.buttonCep} />
      </View>


      <CustomInputText
        errors={errors}
        control={control}
        name="street"
        placeholder='rua'
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="neighborhood"
        placeholder='bairro'
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="number"
        keyboardType='numeric'
        placeholder='número'
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="city"
        placeholder='cidade'
        mask={maskCep}
        rules={{
          required: 'Campo obrigatório.'
        }}
        customStyle={styles.input}
      />

      <CustomInputText
        errors={errors}
        control={control}
        name="uf"
        placeholder='UF'
        mask={maskCep}
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
        name="birthday"
        placeholder='DD-MM-YYYY'
        keyboardType='numeric'
        mask={maskDate}
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
        <YellowButton title="Salvar" onPress={handleSubmit(() => navigation.navigate('ErrorView'))} />
      </View>
    </ScrollView>
  )
}