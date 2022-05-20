import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  FlatList
} from "react-native";
import styles from "../styles/Ligands.styles.js";
// import Icon from "@expo/vector-icons/AntDesign";
import COLORS from "../consts/colors.js";

const Ligands = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: Platform.OS === "android" ? "bold" : "600",
            }}
          >
            Ligands
          </Text>
        
        </View>
        <View
          style={{
            marginTop: 30,
            height: 50,
            backgroundColor: COLORS.light,
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "normal",
              color: COLORS.dark,
            }}
            onChangeText={(textValue) => setText(textValue)}
            value={text}
            placeholder="Search"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ligands;
