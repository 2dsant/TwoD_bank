import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 20
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 32,
    color: theme.colors.secondary,
    marginBottom: 50
  },
  containerButton: {
    width: '100%',
    marginBottom: 50
  }
})