import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import WhatsApp, { SendIcon } from "../assets/icons";
import SendButton from "./SendButton";

interface SocialSection {
  title: string;
  icon: React.ReactNode;
}

const SocialSection = ({ title, icon }: SocialSection) => {
  return (
    <View style={styles.container}>
      {/* <SocialCircle /> */}

    <View style={styles.circle}>
      {icon}
    </View>

      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },
  text: {
    marginStart: s(14),
    flex: 1,
    color: "#8083A3",
    fontSize: s(12),
  },
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  },
});
