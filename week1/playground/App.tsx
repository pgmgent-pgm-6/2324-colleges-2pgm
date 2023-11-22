import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Example from "./components/Example";

export default function App() {
  return (
    <View style={styles.container}>
      <Example />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
