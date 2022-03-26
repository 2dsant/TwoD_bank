import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 250,
    height: 250
  },
  title: {
    textAlign: "center",
    fontFamily: theme.fonts.quickSandBold,
    letterSpacing: 1,
    fontSize: 24,
    color: theme.colors.primary,
    marginBottom: 20
  }
})