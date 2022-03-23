import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    marginRight: 10,
    marginTop: 30
  },
  title: {
    fontFamily: theme.fonts.quickSandBold,
    fontSize: 15,
    marginTop: 5
  }
})