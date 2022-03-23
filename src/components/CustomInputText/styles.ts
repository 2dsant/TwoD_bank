import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10
  },
  icon: {
    width: '10%',
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: '90%',
    backgroundColor: theme.colors.primary,
  },
  error: {
    borderWidth: 1,
    borderColor: theme.colors.quartiary,
  },
  textError: {
    color: theme.colors.quartiary
  }
})