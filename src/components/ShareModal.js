import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { FancyAlert } from "react-native-expo-fancy-alerts";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/CustomModal.style";
import COLORS from "../consts/colors";

const ShareModal = ({ visible, shareHandler, shareMsg, setShareMsg, saveToGallery }) => {
  return (
    <FancyAlert
      visible={visible}
      // onRequestClose={toggleAlert}
      icon={
        <View
          style={[styles.iconContainer, { backgroundColor: COLORS.secCol }]}
        >
          <Ionicons
            name="share-social-outline"
            size={30}
            style={{
              marginLeft: -5,
            }}
            color={COLORS.white}
          />
        </View>
      }
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>Share a screenshot</Text>

        <View style={styles.textInput}>
          <TextInput
            style={styles.listText}
            onChangeText={(textValue) => setShareMsg(textValue)}
            value={shareMsg}
            placeholder="Message"
          />
        </View>

        
        <TouchableOpacity
          style={[styles.btnContainer, { backgroundColor: COLORS.secCol }]}
          onPress={shareHandler}
        >
          <Text
            style={{ color: COLORS.white, fontSize: 14, fontWeight: "bold" }}
          >
            Share
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnContainer, { backgroundColor: COLORS.secCol }]}
          onPress={saveToGallery}
        >
          <Text
            style={{ color: COLORS.white, fontSize: 14, fontWeight: "bold" }}
          >
            Save to gallery
          </Text>
        </TouchableOpacity>
      </View>
    </FancyAlert>
  );
};

export default ShareModal;
