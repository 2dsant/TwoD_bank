import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    borderRadius: 8
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
    borderColor: theme.colors.quaternary,
  },
  textError: {
    color: theme.colors.quaternary
  },
  marginB: {
    marginBottom: 5,
  }
})