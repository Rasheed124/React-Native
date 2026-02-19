import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import UserAvatar from "../components/UserAvatar";
import Header from "../components/Header";
import { s, vs } from "react-native-size-matters";

import Entypo from "@expo/vector-icons/Entypo";
import WhatsApp, { SendIcon } from "../assets/icons";

const ContactUsScreen = () => {
  return (
    <>
      <View style={{ marginTop: vs(60), paddingHorizontal: s(17) }}>
        <Header />
        <Text style={{ fontSize: 30, fontWeight: "800", marginTop: vs(20) }}>
          Contact Us
        </Text>

        <View
          style={{
            backgroundColor: "#ECF0F4",
            padding: s(10),
            marginTop: vs(5),
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "800" }}>
            Social Media Platforms
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              marginTop: vs(5),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginTop: vs(5),
              }}
            >
              <TouchableOpacity style={styles.button}>
                <WhatsApp />
              </TouchableOpacity>

              <Text
                style={{ fontSize: 10, fontWeight: "500", color: "#8083A3" }}
              >
                WhatsApp
              </Text>
            </View>

            <TouchableOpacity style={styles.buttonSend} >
              <SendIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  button: {
    width: s(35),
    height: s(35),
    borderRadius: s(16),
    backgroundColor: "#E4E6E8",
    // boxShadow: ''
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSend: {
    width: s(35),
    height: s(35),
    borderRadius: s(16),
    backgroundColor: "#1077AF",
    // boxShadow: ''
    justifyContent: "center",
    alignItems: "center",
  },
});
