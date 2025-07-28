import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const iconCofeeImg = "@/assets/images/iced-coffee.png";
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={iconCofeeImg}  resizeMode="cover" style={styles.images}>

      </ImageBackground>
      <Text style={styles.text}>Coffe Shop</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  images: {
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
  },
});
