import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/Ligends.styles.js";
import COLORS from "../consts/colors";

const Ligends = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Verification: Press the fingerprint sensor to verify your fingerprint
        </Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/TouchID.png")}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => console.log("pressed")}
        >
          <Text style={styles.btnText}>Go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Ligends;
