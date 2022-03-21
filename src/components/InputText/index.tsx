import React from "react";
import { TextInput, TextInputProps } from 'react-native'
import { styles } from "./styles";

type Props = TextInputProps & {
  placeholder: string;
  border?: boolean;
}

export function InputText({ placeholder, border, ...rest }: Props) {
  return (
    <TextInput
      style={[styles.container, border ? { borderWidth: 1, borderRadius: 8 } : null]}
      placeholder={placeholder}
      {...rest}
    />
  )
}