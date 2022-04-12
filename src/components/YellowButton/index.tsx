import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, Image, View } from 'react-native'
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string,
  icon?: any
}

export function YellowButton({ title, icon, ...rest }: Props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        {...rest}
      >
        {
          icon &&
          <Image style={styles.icon} source={icon} width={30} height={30} />
        }
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity >
    </View>
  )
}