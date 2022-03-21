import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Pressable, Modal, ScrollView } from 'react-native';
import { styles } from './style';
import { BlackButton } from '../../components/BlackButton';
import { InputText } from '../../components/InputText';
import LogoPng from '../../assets/logo.png';

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);

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
              <InputText
                placeholder='usuário'
                border
              />
              <BlackButton title='Confirmar' />
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
        <InputText
          placeholder='usuário'
        />
        <InputText
          placeholder='senha'
          keyboardType="visible-password"
        />
      </View>

      <View style={styles.footer}>
        <BlackButton title='Entrar' />
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