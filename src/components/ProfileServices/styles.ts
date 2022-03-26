import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.tertiary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.quinary,
    marginBottom: 10
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    color: theme.colors.secondary,
    fontSize: 15,
    marginLeft: 10
  },
  icon: {
    maxWidth: 20,
    maxHeight: 20
  }
})