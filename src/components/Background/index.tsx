import React, { ReactNode } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type props = {
  children: ReactNode
}

export function Background({ children }: props) {
  const { gradient01, gradient02 } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[gradient01, gradient02]}
    >
      {children}
    </LinearGradient>
  )
}