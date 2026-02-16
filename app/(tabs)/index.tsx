import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Link href="/login" style={styles.button}>
        Login Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 25,
    backgroundColor: "coral",
    borderRadius: 7,
    textAlign: "center",
  },
});
