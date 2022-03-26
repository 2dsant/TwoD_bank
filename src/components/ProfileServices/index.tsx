import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

type ServicesProps = {
  title: string;
  icon: any;
}

type Props = {
  data: ServicesProps;
}


export function ProfileServices({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Image style={styles.icon} source={data.icon} width={30} height={30} />

      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacity>
  )
}