import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/view/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";

const ProfileScreen = () => {
  return (
    <AppSaveView style={styles.container}>
      <HomeHeader />
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
});
