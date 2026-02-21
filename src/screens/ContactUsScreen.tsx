import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import UserAvatar from "../components/UserAvatar";
import Header from "../components/Header";
import { s, vs } from "react-native-size-matters";

import WhatsApp, { SendIcon } from "../assets/icons";
import BackButton from "../components/BackButton";
import SocialSection from "../components/SocialSection";

import {
  FontAwesome,
  Feather,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

const ContactUsScreen = () => {
  return (
    <>
      <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
        <View style={styles.header}>
          <BackButton />
          <UserAvatar />
        </View>

        <Text style={styles.screenTitle}>Contact Us</Text>

        <View style={styles.socialContainer}>
          <Text style={styles.socialTitle}>Social Media Platforms</Text>
          <SocialSection
            icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />}
            title="What Up"
          />
          <SocialSection
            icon={<Feather name="x" size={24} color="#178AD9" />}
            title={"X"}
          />
          <SocialSection
            icon={<AntDesign name="instagram" size={24} color="#178AD9" />}
            title={"Instagram"}
          />
          <SocialSection
            icon={
              <FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />
            }
            title={"snap chat"}
          />
          <SocialSection
            icon={<FontAwesome5 name="tiktok" size={24} color="#178AD9" />}
            title={"Tik Tok"}
          />
        </View>
      </View>
    </>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: vs(20),
    marginStart: s(19),
  },
});
