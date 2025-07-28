import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const iconCofeeImg = require("@/assets/images/iced-coffee.png");
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iconCofeeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffe Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
