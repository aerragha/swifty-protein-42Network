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
  switchContainer: {},
  zoomBtn: {
    backgroundColor: COLORS.red,
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  zoomText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
