import React, { useState } from "react";
import { ScrollView, SafeAreaView, View, Text, Button, FlatList } from "react-native";
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

export default function Dashboard() {
  const navigation = useNavigation<any>();
  const [option, setOption] = useState('');
  const [showAmount, setShowAmount] = useState(true);

  function handleOptionSelect(optionId: string) {
    optionId === option ? setOption('') : setOption(optionId);
  }


  return (
    <Background>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <Icon
              name='person-circle-outline'
              type='ionicon'
              size={31}
              color={theme.colors.primary}
              tvParallaxProperties={undefined}
              onPress={() => navigation.navigate('Profile')}
            />
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
          <View style={styles.headerMessage}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.name}> David</Text>
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
                  <Text style={styles.amount}>R$2.000,00</Text>
              }
            </View>
          </View>

          <ScrollMenu
            setOption={handleOptionSelect}
          />

          <View style={styles.button}>
            <YellowButton title="Meu cartão" />
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