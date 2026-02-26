import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { s, vs } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();
    

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        {/* Card Image Section */}
        <View style={styles.imageCard}>
          <Text style={styles.cardTitle}>Organic{"\n"}Mind</Text>

          {/* Replace with your actual image */}
          <Image
             source={require("../../assets/login-bg.png")}
             style={styles.image}
             resizeMode="contain"
           />
        </View>

        {/* Text Section */}
        <View style={styles.textSection}>
          <Text style={styles.heading}>Productive Mind</Text>

          <Text style={styles.description}>
            With only the features you need, Organic Mind is customized for
            individuals seeking a stress-free way to stay focused on their
            goals, projects, and tasks.
          </Text>
        </View>

        {/* Button Section */}
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() =>  navigation.navigate('')} >
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text style={styles.signInBold}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    margin: vs(15),
    marginTop: vs(45),
    borderRadius: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  imageCard: {
    backgroundColor: "#000000e8",
    borderRadius: 24,
    padding: 20,
    paddingBottom: s(40),
    height: width * 0.9,
    justifyContent: "space-between",
    marginBottom: 30,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "90%",
    alignSelf: "center",
  },
  textSection: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
  },
  primaryButton: {
    backgroundColor: "#F5C542",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  signInText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  signInBold: {
    fontWeight: "700",
  },
});
