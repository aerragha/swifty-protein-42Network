import { StyleSheet, Platform } from "react-native";
import COLORS from "../consts/colors";

export default StyleSheet.create({
  iconContainer: {
    borderRadius: 32,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -16,
    marginBottom: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: Platform.select({
      ios: "600",
      android: "bold",
    }),
  },
  btnContainer: {
    borderRadius: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: "stretch",
    marginTop: 16,
    minWidth: "50%",
    paddingHorizontal: 16,
  },
  textInput: {
    marginTop: 30,
    minWidth: '100%',
    height: 40,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  listText: {
    fontSize: 16,
    fontWeight: "normal",
    color: COLORS.dark,
  },
});
