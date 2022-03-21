import { StyleSheet } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  image: {
    width: 80,
    height: 80
  },
  message: {
    color: theme.colors.primary,
    marginVertical: 5
  },
  content: {
    width: '100%',
  },
  footer: {
    width: '100%',
    justifyContent: "flex-end",
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    padding: 40,
    alignItems: "center",
    marginTop: '50%',
    borderRadius: 50
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
    fontSize: 32,
    marginBottom: 30
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.colors.secondary,
    marginBottom: 30
  },
})