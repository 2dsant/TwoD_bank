import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";

export function DeleteButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
    >
      <Icon
        name='trash-outline'
        type='ionicon'
        color={theme.colors.quaternary}
        size={35}
        tvParallaxProperties={undefined}
      />
    </TouchableOpacity>
  )
}