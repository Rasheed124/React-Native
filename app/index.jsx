import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

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

        {/* Pressabele (Button) for clicking - pass for events as the Links */}
        <Link href="/menu" style={{ marginHorizontal: "auto",  }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu </Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
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
    marginBottom: 20,
  },
  link: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textdecoration: "underline",
    padding: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    height: 60,
    borderRadius: 20,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
