import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { vs } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  //   const navigation = useNavi

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        {/* Top Card */}
        <View style={styles.imageCard}>
          <Text style={styles.cardTitle}>Organic{"\n"}Mind</Text>

          <Image
            source={require("../../assets/login-bg.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.heading}>Sign in</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="email.email@mail.com"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="********************"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { flex: 1 }]}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Link */}
        <TouchableOpacity
          style={{ marginTop: 25 }}
          //   onPress={() => navigation?.navigate("SignUp")}
        >
          <Text style={styles.signupText}>
            Don’t have an account?{" "}
            <Text style={styles.signupBold}>Sign up here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  imageCard: {
  backgroundColor: "#000000e8",
    borderRadius: 24,
    padding: 20,
    height: width * 0.55,
    justifyContent: "space-between",
    marginBottom: 25,
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "65%",
    alignSelf: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1A1A1A",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  input: {
    fontSize: 15,
    color: "#333",
  },
  primaryButton: {
    backgroundColor: "#F5C542",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },
  orText: {
    marginHorizontal: 10,
    color: "#777",
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    backgroundColor: "#EAEAEA",
    height: 50,
    borderRadius: 12,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  socialText: {
    fontWeight: "600",
    color: "#333",
  },
  signupText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  signupBold: {
    fontWeight: "700",
  },
});
