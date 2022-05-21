import { Text, View, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import React from "react";

const Ligand = ({ onClick, ligand }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginVertical: 7,
        marginHorizontal: 10,
      }}
      onPress={() => onClick(ligand)}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {ligand}
      </Text>
      <Divider style={{ marginTop: 10 }} />
    </TouchableOpacity>
  );
};

export default Ligand;
