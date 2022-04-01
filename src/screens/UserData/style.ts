import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 20,
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 32,
    color: theme.colors.secondary,
    letterSpacing: 1,
    marginBottom: 20
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
  textInput: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.senary,
    color: theme.colors.secondary,
    fontFamily: theme.fonts.interRegular,
    fontSize: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: 'top',
  },
  containerButton: {
    width: '100%',
    marginTop: 30,
    marginBottom: 20
  }
})