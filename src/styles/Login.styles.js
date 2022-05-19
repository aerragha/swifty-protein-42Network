import { StyleSheet } from "react-native";
import COLORS from "../consts/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: COLORS.grey,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
  },
  ImageContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    width: "40%",
    height: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  goButton: {
    backgroundColor: COLORS.red,
    width: "90%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
  },
});
