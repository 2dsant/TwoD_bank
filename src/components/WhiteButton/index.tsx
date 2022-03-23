import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
}

export function WhiteButton({ title }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}