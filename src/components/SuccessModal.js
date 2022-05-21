import React from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import { FancyAlert } from "react-native-expo-fancy-alerts";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/CustomModal.style";
import COLORS from "../consts/colors";

const SuccessModal = ({ visible, toggleAlert, msg }) => {
  return (
    <FancyAlert
      visible={visible}
      onRequestClose={toggleAlert}
      icon={
        <View
          style={[styles.iconContainer, { backgroundColor: COLORS.flatGreen }]}
        >
          <Ionicons
            name={Platform.select({
              ios: "ios-checkmark",
              android: "md-checkmark",
            })}
            color={COLORS.white}
            size={36}
          />
        </View>
      }
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{msg}</Text>
        <TouchableOpacity
          style={[styles.btnContainer, { backgroundColor: COLORS.flatGreen }]}
          onPress={toggleAlert}
        >
          <Text style={{ color: COLORS.white }}>OK</Text>
        </TouchableOpacity>
      </View>
    </FancyAlert>
  );
};

export default SuccessModal;
