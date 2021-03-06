import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextInput, View, TextInputProps, Text } from 'react-native'
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { noMask } from '../../utils/masks';


type Props = TextInputProps & {
  placeholder: string;
  border?: boolean;
  control: any;
  name: string;
  rules?: {};
  errors: {};
  icon?: boolean;
  mask?: (value: string) => string;
  customStyle?: {}
}

export function CustomInputText({ control, mask = noMask, name, customStyle, rules = {}, placeholder, border, icon = false, ...rest }: Props) {
  const [hidePass, setHidePass] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }: any) => (
        <View style={styles.marginB}>
          <View style={[styles.container, border ? { borderWidth: 1, borderRadius: 8 } : null, error ? styles.error : null]}>
            <TextInput
              value={value}
              onChangeText={(value) => onChange(mask(value))}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={hidePass}
              {...rest}
              style={customStyle ? customStyle : styles.input}
            />
            {
              icon &&
              <View style={styles.icon}>
                {
                  hidePass ?
                    <Icon
                      name='eye'
                      type='ionicon'
                      color={theme.colors.secondary}
                      tvParallaxProperties={undefined}
                      onPress={() => setHidePass(!hidePass)}
                    />
                    :
                    <Icon
                      name='eye-off'
                      type='ionicon'
                      color={theme.colors.secondary}
                      tvParallaxProperties={undefined}
                      onPress={() => setHidePass(!hidePass)}
                    />
                }
              </View>
            }

          </View>
          {error && <Text style={styles.textError}>{error.message}</Text>}
        </View>
      )}
    />
  )
}