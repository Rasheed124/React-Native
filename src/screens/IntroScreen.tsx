import { Image, StyleSheet, Text, View } from "react-native";
import FoodLogo from "../assets/FoodLogo";
import SunImage from "../assets/SunImage";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo  />
      <SunImage  style={styles.logo} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
