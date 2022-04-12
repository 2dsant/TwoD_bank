import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: any;
  route: string;
}

export function MenuOption({ title, icon: Icon, route, ...rest }: Props) {
  const navigation = useNavigation<any>();

  function handlePress() {
    navigation.navigate(route);
  }

  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Image source={Icon} width={30} height={30} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}