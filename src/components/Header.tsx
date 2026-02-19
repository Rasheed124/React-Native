import React from "react";
import { StyleSheet, View } from "react-native";
import UserAvatar from "./UserAvatar";
import BackButton from "./BackButton";

const Header = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <UserAvatar />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
