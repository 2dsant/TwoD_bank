import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='person-circle-outline'
          type='ionicon'
          size={31}
          color={theme.colors.primary}
          tvParallaxProperties={undefined}
        />
        <Text style={styles.name}> David</Text>
      </View>

      <View style={styles.content}>
      </View>

    </View>
  )
}