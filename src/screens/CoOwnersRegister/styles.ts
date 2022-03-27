import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 20,
    alignItems: "center"
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 32,
    color: theme.colors.secondary,
    letterSpacing: 1
  },
  input: {
    width: '100%',
    backgroundColor: theme.colors.quinary,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.interRegular,
    fontSize: 13,
    textAlign: 'left',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.secondary
  },
  containerButton: {
    width: '100%',
    marginTop: 20
  }
})