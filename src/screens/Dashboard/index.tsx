import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";
import { ScrollMenu } from "../../components/ScrollMenu";
import { YellowButton } from "../../components/YellowButton";
import { servicesList } from "../../utils/servicesList";
import { ListDivider } from "../../components/ListDivider";
import { BankServices } from "../../components/BankServices";
import { Background } from "../../components/Background";
import CardPng from '../../assets/card.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/RootReducer";
import { Load } from "../../components/Load";
import { Popable } from 'react-native-popable';
import PopOverContent from "../../components/PopOverContent";
import { getUserDataThunk } from "../../redux/thunks/user";
import { hideLoading, showLoading } from "../../redux/actions/AppActions";


export default function Dashboard() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [option, setOption] = useState('');
  const [showAmount, setShowAmount] = useState(true);
  const { loading } = useSelector((state: RootState) => state.appReducer);
  const { data } = useSelector((state: RootState) => state.userDataReducer);

  function handleOptionSelect(optionId: string) {
    optionId === option ? setOption('') : setOption(optionId);
  }


  useEffect(() => {
    dispatch(showLoading())
    dispatch(getUserDataThunk())
    dispatch(hideLoading())
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <Icon
              name='menu-outline'
              type='ionicon'
              size={31}
              color={theme.colors.primary}
              tvParallaxProperties={undefined}
              onPress={() => navigation.openDrawer()}
            />
            <View style={styles.accountIcons}>
              <Popable caret={false} position="right" content={<PopOverContent />}>
                <Icon
                  name='person-circle-outline'
                  type='ionicon'
                  size={31}
                  color={theme.colors.primary}
                  tvParallaxProperties={undefined}
                />
              </Popable>
              {
                showAmount ?
                  <Icon
                    name='eye-off'
                    type='ionicon'
                    color={theme.colors.primary}
                    tvParallaxProperties={undefined}
                    onPress={() => setShowAmount(!showAmount)}
                  />
                  :
                  <Icon
                    name='eye'
                    type='ionicon'
                    color={theme.colors.primary}
                    tvParallaxProperties={undefined}
                    onPress={() => setShowAmount(!showAmount)}
                  />
              }
            </View>
          </View>
          <View style={styles.headerMessage}>
            <Text style={styles.title}>Olá, </Text>
            <Text style={styles.name}>{data.nome}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View>
            <Text style={styles.titleAccount}>Conta</Text>
            <View style={styles.containerAmount}>
              {
                showAmount ?
                  <View style={styles.blackout}></View>
                  :
                  <Text style={styles.amount}>{data.contas[0].saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
              }
            </View>
          </View>

          <ScrollMenu
            setOption={handleOptionSelect}
          />

          <View style={styles.button}>
            <YellowButton title="Meu cartão" icon={CardPng} onPress={() => navigation.navigate('ErrorView')} />
          </View>

          {
            servicesList.map(item => (
              <View key={item.id}>
                <BankServices data={item} />
                <ListDivider />
              </View>
            ))
          }
        </View>
      </ScrollView>
    </Background>
  )
}