import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";
import { ScrollMenu } from "../../components/ScrollMenu";

export default function Dashboard() {
  const navigation = useNavigation<any>();
  const [option, setOption] = useState('');

  function handleOptionSelect(optionId: string) {
    optionId === option ? setOption('') : setOption(optionId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <Icon
            name='person-circle-outline'
            type='ionicon'
            size={31}
            color={theme.colors.primary}
            tvParallaxProperties={undefined}
            onPress={() => console.warn('clicou profile')}
          />
          <Icon
            name='eye'
            type='ionicon'
            size={31}
            color={theme.colors.primary}
            tvParallaxProperties={undefined}
            onPress={() => console.warn('clicou olho')}
          />
        </View>
        <View style={styles.headerMessage}>
          <Text style={styles.title}>Olá,</Text>
          <Text style={styles.name}> David</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.titleAccount}>Conta</Text>
          <Text style={styles.amount}>R$2.000,00</Text>
        </View>

        <ScrollMenu
          setOption={handleOptionSelect}
        />
      </View>
    </View >
  )
}