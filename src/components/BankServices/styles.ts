import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 89,
    borderColor: theme.colors.tertiary,
    borderRadius: 8,
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: theme.colors.quinary,
    marginBottom: 5
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    color: theme.colors.secondary,
    fontSize: 20,
    marginTop: 10

  },
  subtitle: {
    fontFamily: theme.fonts.interRegular,
    color: theme.colors.secondary,
    fontSize: 14,
    marginBottom: 10
  }
})