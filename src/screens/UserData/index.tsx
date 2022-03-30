import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { YellowButton } from '../../components/YellowButton';
import { RootState } from '../../redux/reducers/RootReducer';
import { styles } from './style';
import { TextInputMask } from 'react-native-masked-text'


export default function UserData() {
  const { user } = useSelector((state: RootState) => state.loginReducer);
  const [phone, setPhone] = useState(user.telephone);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);
  const [description, setDescription] = useState(user.description);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Dados</Text>

      <TextInput style={styles.input} placeholder="nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="email" value={email} onChangeText={setEmail} />
      <TextInputMask
        style={styles.input}
        type={'cel-phone'}
        keyboardType="phone-pad"
        maxLength={1555}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInputMask
        style={styles.input}
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        value={birthday}
        onChangeText={setBirthday}
      />

      <TextInput style={styles.textInput} placeholder="description" value={description} onChangeText={setDescription} />

      <View style={styles.containerButton}>
        <YellowButton title="Salvar" />
      </View>
    </View>
  )
}