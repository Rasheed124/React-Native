import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";

import Entypo from "@expo/vector-icons/Entypo";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Entypo name="chevron-left" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  button: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});
