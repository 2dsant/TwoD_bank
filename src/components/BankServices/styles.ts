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
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    color: theme.colors.secondary,
    fontSize: 20,
  },
  subtitle: {
    fontFamily: theme.fonts.interRegular,
    color: theme.colors.secondary,
    fontSize: 14,
    marginBottom: 10
  },
  icon: {
    maxWidth: 25,
    maxHeight: 25,
    marginRight: 10
  }
})