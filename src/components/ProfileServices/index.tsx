import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

type ServicesProps = {
  title: string;
  icon: any;
  route: string;
}

type Props = {
  data: ServicesProps;
}


export function ProfileServices({ data, ...rest }: Props) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => navigation.navigate(data.route)}
    >
      <Image style={styles.icon} source={data.icon} width={30} height={30} />

      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacity>
  )
}