import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type ServicesProps = TouchableOpacityProps & {
  title: string;
  subtitle?: string;
  icon: any;
  rota: string;
}

type Props = {
  data: ServicesProps;
}


export function BankServices({ data, ...rest }: Props) {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate(data.rota);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handlePress}
      {...rest}
    >
      <View style={styles.containerTitle}>
        <Image style={styles.icon} source={data.icon} width={25} height={25} />
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Text style={styles.subtitle}>{data.subtitle}</Text>

    </TouchableOpacity>
  )
}