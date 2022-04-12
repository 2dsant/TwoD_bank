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
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  image: {
    width: 80,
    height: 80
  },
  title: {
    color: theme.colors.primary,
    marginVertical: 5
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: "flex-end",
    paddingVertical: 20,
    marginBottom: getBottomSpace(),

  }
})