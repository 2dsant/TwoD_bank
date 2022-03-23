import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { WhiteButton } from '../../components/WhiteButton';
import { BlackButton } from '../../components/BlackButton';
import Login from '../Login';
import LogoPng from '../../assets/logo.png';

export default function SignIn() {
  const navigation = useNavigation<any>();

  function handleSignIn() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Image
          source={LogoPng}
          style={styles.image}
          resizeMode="stretch"
        />

        <Text style={styles.title}>
          Seu banco digital.
        </Text>
      </View>

      <View style={styles.footer}>
        <BlackButton title='Entrar' onPress={handleSignIn} />
        <WhiteButton title='Cadastre-se' />
      </View>
    </View>
  )
}