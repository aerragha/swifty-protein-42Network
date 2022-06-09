import { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  AppState,
} from "react-native";
import Ligand from "../components/Ligand.js";
// import SuccessModal from "../components/SuccessModal.js";
import ErrorModal from "../components/ErrorModal.js";
import styles from "../styles/Ligands.styles.js";
import LigandsJson from "../consts/ligands.json";
import Spinner from "react-native-loading-spinner-overlay";
import { getPDB } from "../api/api.js";
import { parseLigand } from "../helpers/helpers.js";

const Ligands = ({ navigation }) => {
  const appState = useRef(AppState.currentState);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [LigandsList, setLigandsList] = useState([]);
  // Modal states
  const [visibleError, setVisibleError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleAlertError = (msg) => {
    setErrorMsg(msg);
    setVisibleError(!visibleError);
  };

  useEffect(() => {
    AppState.addEventListener("change", (nextAppState) => {
      if (
        nextAppState.match(/inactive|background/) &&
        appState.current === "active"
      ) {
        navigation.navigate("Login");
        // console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
    });
  }, []);


  useEffect(() => {
    if (text.trim() === "") setLigandsList(LigandsJson);
    else {
      const filteredLigands = LigandsJson.filter((elm) =>
        elm.toLowerCase().includes(text.toLowerCase())
      );
      setLigandsList(filteredLigands);
    }
  }, [text]);

  const onClick = (ligand) => {
    setIsLoading(true);
    getPDB(ligand)
      .then((res) => {
        setIsLoading(false);
        const { atoms, connections } = parseLigand(res);
        navigation.navigate("LigandView", { atoms, connections, ligand });
      })
      .catch((err) => {
        setIsLoading(false);
        toggleAlertError("We can't load the ligand through the website.");
      });
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
