import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { DeleteButton } from "../DeleteButton";

export function CoOwnersList() {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Maria antonieta da silva</Text>
          <Text style={styles.subtitle}>Conjuge</Text>
        </View>
        <DeleteButton />
      </View>
      <ListDivider />
    </TouchableOpacity>
  )
}