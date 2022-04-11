import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 32,
    color: theme.colors.secondary,
    marginVertical: 20
  },
  subtitle: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 20,
    color: theme.colors.secondary,
    marginVertical: 20,
    alignSelf: "flex-start"
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    height: 180,
    marginVertical: 10,
    justifyContent: "space-between"
  },
  shadowProp: {
    shadowColor: theme.colors.secondary,
    shadowOffset: { width: -2, height: 4 },
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  image: {
    width: 45,
    height: 45
  },
  containerText: {
    marginTop: 30,
  },
  numberCard: {
    fontFamily: theme.fonts.interRegular,
    fontSize: 14
  },
  nameCard: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 14
  },
  footer: {
    width: '100%',
    marginTop: 20,
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignContent: "flex-end",
    flexDirection: "row"
  },
  value: {
    fontFamily: theme.fonts.interSemiBold,
    fontSize: 15,
    color: theme.colors.secondary,
    alignSelf: "flex-start"
  },
  button: {
    width: '100%',
    marginVertical: 40
  }
})