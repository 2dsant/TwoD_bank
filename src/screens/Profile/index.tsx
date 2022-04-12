import React, { useState } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";
import { dataProfileServices } from "../../utils/dataProfileServices";
import { ListDivider } from "../../components/ListDivider";
import { ProfileServices } from "../../components/ProfileServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/RootReducer";
import { useNavigation } from "@react-navigation/native";
import { login_do_logout } from '../../redux/actions/LoginActions';
import { Background } from "../../components/Background";

export default function Profile() {
  const navigation = useNavigation<any>();
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleExit = () => {
    dispatch(login_do_logout());
  }

  return (
    <Background>
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

        <View style={styles.header}>
          <View style={styles.containerIcon}>
            <Icon
              name='person-circle-outline'
              type='ionicon'
              size={31}
              color={theme.colors.primary}
              tvParallaxProperties={undefined}
            />
            <Text style={styles.name}> {user.nome}</Text>
          </View>

          <View style={styles.accountDetails}>
            <Text style={styles.textDetails}>Agência: 0000</Text>
            <Text style={styles.textDetails}>Conta: 00000-0</Text>
            <Text style={styles.textDetails}>D2 Bank S.A</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.content}>
            {
              dataProfileServices.map(item => (
                <View key={item.id}>
                  {
                    item.title === 'Sair' ?
                      <ProfileServices data={item} onPress={() => setShowModal(true)} />
                      :
                      <ProfileServices data={item} onPress={() => navigation.navigate(item.route)} />
                  }
                  <ListDivider />
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    </Background>
  )
}