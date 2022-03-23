import React from "react";
import { ScrollView, Button } from "react-native";
import { styles } from './styles';
import { options } from "../../utils/categories";
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
            onPress={() => setOption(option.id)}
          />
        ))
      }
    </ScrollView>
  )
}