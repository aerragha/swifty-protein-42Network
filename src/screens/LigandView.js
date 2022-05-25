import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../styles/LigandView.styles.js";
import { AntDesign } from "@expo/vector-icons";
import { Scene, Mesh, MeshBasicMaterial, PerspectiveCamera } from "three";
import ExpoTHREE, { Renderer, TextureLoader } from "expo-three";
import SwitchSelector from "react-native-switch-selector";
import { GLView } from "expo-gl";
import COLORS from "../consts/colors.js";

// Rasmol VS Jmol

const LigandView = ({ navigation, route }) => {
  const { ligand, atoms, connections } = route.params;
  const [selectedColor, setSelectedColor] = useState("rasmol");
  const [mode, setMode] = useState("1");

  const colorOptions = [
    { label: "Rasmol", value: "rasmol" },
    { label: "Jmol", value: "Jasmol" },
  ];
  const modes = [
    { label: "Both", value: "1" },
    { label: "Balls", value: "2" },
    { label: "Sticks", value: "3" },
  ];

  const onContextCreate = async (gl) => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      45,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      1,
      1000
    );

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 0.3,
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

          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 5,
                marginBottom: 10,
              }}
            >
              Color:
            </Text>
            <SwitchSelector
              options={colorOptions}
              initial={0}
              onPress={(value) => setSelectedColor(value)}
              buttonColor={COLORS.red}
              borderColor={COLORS.red}
              borderRadius={18}
              fontSize={15}
              bold={true}
              hasPadding={true}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 5,
                marginBottom: 10,
              }}
            >
              Modes:
            </Text>
            <SwitchSelector
              options={modes}
              initial={0}
              onPress={(value) => setMode(value)}
              buttonColor={COLORS.red}
              borderColor={COLORS.red}
              fontSize={15}
              bold={true}
              borderRadius={18}
              hasPadding={true}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.6,
            borderWidth: 2,
            borderColor: COLORS.red,
            height: 500,
            marginTop: 20,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default LigandView;
