import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/view/AppSaveView";
import SignUpScreen from "./src/screens/auth/SignUpScreen";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <SignUpScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
