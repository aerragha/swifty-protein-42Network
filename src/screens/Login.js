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
import ErrorModal from "../components/ErrorModal.js";
import SuccessModal from "../components/SuccessModal.js";

const Login = ({ navigation }) => {
  const [visibleError, setVisibleError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const toggleAlertError = (msg) => {
    setErrorMsg(msg);
    setVisibleError(!visibleError);
  };

  const successHandler = () => {
    setVisibleSuccess(!visibleSuccess);
    navigation.navigate("Ligands");
  }

  const toggleAlertSuccess = (msg) => {
    setSuccessMsg(msg);
    setVisibleSuccess(!visibleSuccess);
  };

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        toggleAlertError("Biometrics not supported");
        navigation.navigate("Ligands");
      }
    })();
  });

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth
      .then((result) => {
        if (result.success) {
          toggleAlertSuccess("Authenticated with success");
        } 
        else {
          toggleAlertError("Authentication failed");
        }
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
      <ErrorModal
        visible={visibleError}
        toggleAlert={toggleAlertError}
        msg={errorMsg}
      />
      <SuccessModal
        visible={visibleSuccess}
        successHandler={successHandler}
        msg={successMsg}
      />
    </SafeAreaView>
  );
};

export default Login;
