import React from "react";
import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

const SocialCircle = () => {
  return <div></div>;
};

export default SocialCircle;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    borderColor: "#e4e6e8",
  },
});
