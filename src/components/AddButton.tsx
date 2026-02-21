import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import React from "react";
import { s, vs } from "react-native-size-matters";

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Feather name="plus" size={24} color="#FF7622" />
      <Text style={{ color: "#FF7622", fontSize: s(14) }}>Add New</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    borderColor: "#F0F5FA",
    borderWidth: s(2),
    backgroundColor: "#fff",
    borderRadius: s(10),
    paddingVertical: vs(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: vs(15),
  },
});
