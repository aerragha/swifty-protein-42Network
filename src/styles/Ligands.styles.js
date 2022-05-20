import { StyleSheet } from "react-native";
import COLORS from "../consts/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
});
