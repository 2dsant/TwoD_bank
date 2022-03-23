import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: any;
}

export function MenuOption({ title, icon: Icon, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
    >
      <Image source={Icon} width={30} height={30} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}