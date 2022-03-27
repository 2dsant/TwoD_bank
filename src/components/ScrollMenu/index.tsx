import React from "react";
import { ScrollView } from "react-native";
import { styles } from './styles';
import { options } from "../../utils/options";
import { MenuOption } from "../MenuOption";

type Props = {
  setOption: (categoryId: string) => void;
}

export function ScrollMenu({ setOption, }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={true}
    >
      {
        options.map(option => (
          <MenuOption
            key={option.id}
            title={option.title}
            icon={option.icon}
            route={option.route}
            onPress={() => setOption(option.id)}
          />
        ))
      }
    </ScrollView>
  )
}