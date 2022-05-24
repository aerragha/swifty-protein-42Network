import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../styles/LigandView.styles.js";
import { AntDesign } from "@expo/vector-icons";
import { Scene, Mesh, MeshBasicMaterial, PerspectiveCamera } from "three";
import ExpoTHREE, { Renderer, TextureLoader } from "expo-three";
import { GLView } from "expo-gl";
import COLORS from "../consts/colors.js";

// Rasmol VS Jmol

const LigandView = ({ navigation, route }) => {
  const { ligand, atoms, connections } = route.params;
  const [selectedColor, setSelectedColor] = useState("Rasmol");

  const onContextCreate = async (gl) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      45,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.1,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Ligand:{" "}
            <Text
              style={{
                color: COLORS.red,
              }}
            >
              {ligand}
            </Text>
          </Text>
          <TouchableOpacity>
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
          borderWidth: 2,
          borderColor: COLORS.red,
        }}
      >
        <GLView
          onContextCreate={onContextCreate}
          style={{
            marginTop: 20,
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

export default LigandView;
