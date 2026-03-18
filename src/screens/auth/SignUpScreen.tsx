import { StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppSaveView from "../../components/view/AppSaveView";
import AppButton from "../../components/buttons/AppButtons";
import { AppColors } from "../../styles/color";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("")

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="User Name" value="" onChangeText={setUserName}/>
      <AppTextInput placeholder="Email" onChangeText={setEmail} value="" />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        value=""
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton title="Create New Account" />
      <AppButton
        title="Go To Sign In"
        style={styles.signInButton}
        textColor={AppColors.primary}
      />
    </AppSaveView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
