import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/69062785?s=400&u=98c6913a082fcb3bd6badb73a9c4dead95374271&v=4",
        }}
        style={styles.avatar}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});
