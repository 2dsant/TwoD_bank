import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { YellowButton } from "../../components/YellowButton";
import { styles } from "./styles";

export default function CoOwnersRegister() {
  const [name, setName] = useState('');
  const [kinship, setKinship] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Co-Titular</Text>
      <TextInput style={styles.input} placeholder="nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="parentesco" value={kinship} onChangeText={setKinship} />
      <TextInput style={styles.input} placeholder="cpf" value={cpf} onChangeText={setCpf} />

      <View style={styles.containerButton}>
        <YellowButton title="Salvar" />
      </View>
    </View>
  )
}