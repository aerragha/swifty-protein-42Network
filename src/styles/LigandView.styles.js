import { StyleSheet, Platform } from "react-native";
import COLORS from "../consts/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  header: {
    // flex: 0.1,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  switchContainer: {

  },
  footer: {
    flex: 0.1,
    // borderWidth: 2,
    // borderColor: COLORS.red,
  }
});
