import { useEffect, useState, useRef, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  AppState,
} from "react-native";
import Ligand from "../components/Ligand.js";
import SuccessModal from "../components/SuccessModal.js";
import ErrorModal from "../components/ErrorModal.js";
import styles from "../styles/Ligands.styles.js";
import LigandsJson from "../consts/ligands.json";
import Spinner from "react-native-loading-spinner-overlay";

const Ligands = ({ navigation }) => {
  const appState = useRef(AppState.currentState);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [LigandsList, setLigandsList] = useState([]);
  // Modal states
  const [visibleError, setVisibleError] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleAlertSuccess = (msg) => {
    setSuccessMsg(msg);
    setVisibleSuccess(!visibleSuccess);
  };

  const toggleAlertError = (msg) => {
    setErrorMsg(msg);
    setVisibleError(!visibleError);
  };

  // useEffect(() => {
  //   const subscription = AppState.addEventListener("change", (nextAppState) => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === "active"
  //     ) {
  //       navigation.navigate("Login");
  //       // console.log("App has come to the foreground!");
  //     }
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  useEffect(() => {
    if (text.trim() === "") setLigandsList(LigandsJson);
    else {
      const filteredLigands = LigandsJson.filter((elm) =>
        elm.toLowerCase().includes(text.toLowerCase())
      );
      setLigandsList(filteredLigands);
    }
  }, [text]);

  const onClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    navigation.navigate("LigandView");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ligandsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Ligands</Text>
        </View>
        <View style={styles.listContainer}>
          <TextInput
            style={styles.listText}
            onChangeText={(textValue) => setText(textValue)}
            value={text}
            placeholder="Search"
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={LigandsList}
            renderItem={({ item }) => (
              <Ligand
                onClick={onClick}
                ligand={item}
                setIsLoading={setIsLoading}
              />
            )}
          />
        </View>
      </View>
      <SuccessModal
        visible={visibleSuccess}
        toggleAlert={toggleAlertSuccess}
        msg={successMsg}
      />
      <ErrorModal
        visible={visibleError}
        toggleAlert={toggleAlertError}
        msg={errorMsg}
      />
      {isLoading && (
        <Spinner
          visible={true}
          textContent={"Loading..."}
          textStyle={{
            color: "#FFF",
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Ligands;
