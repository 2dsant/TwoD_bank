import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";
import { dataProfileServices } from "../../utils/dataProfileServices";
import { ListDivider } from "../../components/ListDivider";
import { ProfileServices } from "../../components/ProfileServices";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerIcon}>
          <Icon
            name='person-circle-outline'
            type='ionicon'
            size={31}
            color={theme.colors.primary}
            tvParallaxProperties={undefined}
          />
          <Text style={styles.name}> David</Text>
        </View>

        <View style={styles.accountDetails}>
          <Text style={styles.textDetails}>Agência: 0000</Text>
          <Text style={styles.textDetails}>Conta: 00000-0</Text>
          <Text style={styles.textDetails}>D2 Bank S.A</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.content}>
          {
            dataProfileServices.map(item => (
              <View key={item.id}>
                <ProfileServices data={item} />
                <ListDivider />
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}