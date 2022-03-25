import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 33,
    paddingTop: 53
  },
  content: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 33,
    paddingTop: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: theme.fonts.interBold,
    color: theme.colors.primary
  },
})