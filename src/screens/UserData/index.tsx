import React from 'react';
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

export default function UserData() {
  const { data } = useSelector((state: RootState) => state.userDataReducer);
  const navigation = useNavigation<any>();

  const { control, setValue, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: `${data.nome}`,
      email: `${data.email}`,
      telephone: maskPhone(data.celular),
      birthday: maskDate(data.data_nasc),
      description: `${data.descricao}`
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