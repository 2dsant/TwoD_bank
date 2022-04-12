import React, { useState } from "react"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { login_do_logout } from '../../redux/actions/LoginActions';
import { hideLoading, showLoading } from "../../redux/actions/AppActions";

export default function PopOverContent() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const goToProfile = () => {
    dispatch(showLoading())
    setTimeout(() => {
      navigation.navigate('UserData')
      dispatch(hideLoading())
    }, 3000);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleExit = () => {
    dispatch(login_do_logout());
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.subtitle}>Deseja realmente sair?</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={handleExit} style={styles.buttonExit}><Text style={styles.textButtonExit}>Sair</Text></TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}><Text style={styles.textButtonCancel}>Cancelar</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal >
      <TouchableOpacity onPress={goToProfile} style={styles.button}>
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.button}>
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}