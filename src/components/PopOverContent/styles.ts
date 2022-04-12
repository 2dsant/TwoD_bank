import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: theme.colors.secondary
  },
  button: {
    margin: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: theme.colors.tertiary
  },
  text: {
    color: theme.colors.primary
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
