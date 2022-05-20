import { StyleSheet, Platform } from "react-native";
import COLORS from "../consts/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  ligandsContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
  },
  listContainer: {
    marginTop: 30,
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 25,
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
