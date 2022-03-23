import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //Header
  header: {
    paddingHorizontal: 33,
    paddingTop: 53
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 27
  },
  headerMessage: {
    flexDirection: "row",
    marginBottom: 19
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.interRegular,
    color: theme.colors.primary
  },
  name: {
    fontSize: 18,
    fontFamily: theme.fonts.interBold,
    color: theme.colors.primary
  },

  //Content
  content: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    height: '100%',
    paddingHorizontal: 33,
    paddingTop: 20
  },
  titleAccount: {
    fontFamily: theme.fonts.interBold,
    fontSize: 18,
    color: theme.colors.secondary
  },
  amount: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 18,
    color: theme.colors.secondary
  }
})