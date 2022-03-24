import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
}

export function YellowButton({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity >
  )
}