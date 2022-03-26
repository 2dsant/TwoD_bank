import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 63,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  icon: {
    maxWidth: 20,
    maxHeight: 20,
    tintColor: theme.colors.primary,
    marginRight: 10
  },
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.interSemiBold
  }
})