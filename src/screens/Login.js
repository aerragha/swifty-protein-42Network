import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,

} from "react-native";
import styles from "../styles/Login.styles.js";
import * as LocalAuthentication from "expo-local-authentication";

const Login = ({ navigation }) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth
      .then((result) => {
        setIsAuthenticated(result.success);
        console.log("res:", result);
        navigation.navigate("Ligands");
      })
      .catch((err) => console.log("e1"));
  };

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
          onPress={() => onAuthenticate()}
        >
          <Text style={styles.btnText}>Go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
