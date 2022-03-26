import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: theme.colors.quinary,
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5
  },
  content: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    color: theme.colors.secondary,
    fontSize: 15,
  },
  subtitle: {
    color: theme.colors.septenary,
    marginBottom: 10
  }
})