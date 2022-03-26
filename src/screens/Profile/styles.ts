import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 33,
    paddingTop: 53,
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 33,
    paddingTop: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: theme.fonts.interBold,
    color: theme.colors.primary,
    marginLeft: 10
  },
  accountDetails: {
    marginVertical: 20
  },
  textDetails: {
    fontFamily: theme.fonts.interRegular,
    color: theme.colors.primary,
    fontSize: 15
  }
})