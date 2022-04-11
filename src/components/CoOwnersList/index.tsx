import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { DeleteButton } from "../DeleteButton";

type Props = {
  name: string,
  cellphone: string
}

export function CoOwnersList({ name, cellphone }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{cellphone}</Text>
        </View>
        <DeleteButton />
      </View>
      <ListDivider />
    </TouchableOpacity>
  )
}