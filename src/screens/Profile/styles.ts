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
  },
  modalContainer: {
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    marginTop: '50%',
    padding: 10,
    borderRadius: 10,
  },
  modalContent: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  subtitle: {
    fontFamily: theme.fonts.interRegular,
    fontSize: 18,
    color: theme.colors.secondary,
    marginBottom: 30
  },
  buttons: {
    width: '50%',
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  buttonExit: {
    padding: 10,
    marginRight: 20
  },
  buttonCancel: {
    padding: 10,
    backgroundColor: theme.colors.secondary,
  },
  textButtonExit: {
    fontFamily: theme.fonts.interBold,
    color: theme.colors.secondary
  },
  textButtonCancel: {
    fontFamily: theme.fonts.interBold,
    color: theme.colors.primary
  }
})