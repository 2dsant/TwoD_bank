import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  //Header
  header: {
    paddingHorizontal: 33,
    paddingTop: 20
  },
  headerIcons: {
    width: '100%',
    justifyContent: "center",
    alignItems: "flex-start",
  },
  accountIcons: {
    width: '100%',
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 27,
  },
  popOver: {
    alignItems: "center",
    justifyContent: "center"
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
    paddingHorizontal: 33,
    paddingTop: 20,
  },
  containerAmount: {
    width: '70%',
    height: 30
  },
  blackout: {
    width: '100%',
    height: 18,
    backgroundColor: theme.colors.senary
  },
  titleAccount: {
    fontFamily: theme.fonts.interBold,
    fontSize: 18,
    color: theme.colors.secondary
  },
  status: {
    marginBottom: 20
  },
  positiveAmount: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 18,
    color: theme.colors.octonary
  },
  negativeAmount: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 18,
    color: theme.colors.quaternary
  },
  list: {
    marginBottom: 30
  },
  button: {
    marginVertical: 40
  }
})