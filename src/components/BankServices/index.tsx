import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";
import { servicesList } from "../../utils/servicesList";

type ServicesProps = {
  title: string;
  subtitle: string;
}

type Props = {
  data: ServicesProps;
}


export function BankServices({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </TouchableOpacity>
  )
}