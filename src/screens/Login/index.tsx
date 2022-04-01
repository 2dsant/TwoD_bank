import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Pressable, Modal, ScrollView, Alert, ToastAndroid } from 'react-native';
import { styles } from './styles';
import { BlackButton } from '../../components/BlackButton';
import { CustomInputText } from '../../components/CustomInputText';
import { useForm } from 'react-hook-form';
import LogoPng from '../../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from '../../redux/actions/AppActions';
import { login } from '../../redux/actions/LoginActions';
import { RootState } from '../../redux/reducers/RootReducer';
import { Load } from '../../components/Load';
import { noMask } from "../../utils/masks";

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { control: controlModal, handleSubmit: handleSubmitModal, formState: { errors: errorsModal } } = useForm();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.appReducer);

  const onLoginPressed = (value: any) => {
    dispatch(showLoading())

    setTimeout(() => {
      const user = dispatch(login(value.username, value.password));
      if (!user)
        Alert.alert('Verique os dados de login.')
      dispatch(hideLoading())
    }, 2000);
  }

  const onSendEmailPress = () => {
    ToastAndroid.show("Email enviado. Confira sua caixa de entrada!", ToastAndroid.SHORT);
    setModalVisible(false);
  }

  if (loading) {
    return <Load />
  }

  return (

    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.modalContainer}
          >
            <ScrollView style={styles.content}>
              <Text style={styles.title}>Esqueci minha senha</Text>
              <Text style={styles.subtitle}>Informe seu usuário que enviaremos um link para recuperar sua senha em seu email.</Text>
              <CustomInputText
                mask={noMask}
                errors={errorsModal}
                control={controlModal}
                name="username"
                placeholder='usuário'
                border
                rules={{
                  required: 'Campo obrigatório.',
                  minLength: {
                    value: 1,
                    message: 'Usuário deve ter pelo menos 1 caractere.'
                  },
                  // pattern: {
                  //   value: /[A-Za-z]{3}/,
                  //   message: 'É permitido apenas letras e números.'
                  // }
                }}
              />
              <BlackButton title='Confirmar' onPress={handleSubmitModal(onSendEmailPress)} />
            </ScrollView>
          </KeyboardAvoidingView>
        </ScrollView>
      </Modal >

      <View style={styles.logo}>
        <Image
          source={LogoPng}
          style={styles.image}
          resizeMode="stretch"
        />

        <Text style={styles.message}>
          Seu banco digital.
        </Text>
      </View>

      <View style={styles.content}>
        <CustomInputText
          errors={errors}
          control={control}
          name="username"
          placeholder='usuário'
          rules={{
            required: 'Campo obrigatório.',
            minLength: {
              value: 1,
              message: 'Usuário deve ter pelo menos 1 caractere'
            },
            // pattern: {
            //   value: /[A-Za-z]{3}/,
            //   message: 'É permitido apenas letras e números.'
            // }
          }}
        />
        <CustomInputText
          errors={errors}
          control={control}
          name="password"
          placeholder='senha'
          keyboardType='numeric'
          icon
          mask={noMask}
          rules={{
            required: 'Campo obrigatório.',
            minLength: {
              value: 7,
              message: 'Senha deve ter pelo menos 7 caracteres.'
            },
          }}
        />
      </View>

      <View style={styles.footer}>
        <BlackButton onPress={handleSubmit(onLoginPressed)} title='Entrar' />
        <Pressable
          onPress={() => setModalVisible(true)}>
          <Text>
            Esqueci minha senha
          </Text>
        </Pressable>
      </View>
    </View >
  )
}