import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 63,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.primary,
  }
})