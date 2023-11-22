import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Oefening1 from "./components/Oefening1";
import Oefening2 from "./components/Oefening2";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Oefening2 />
      </SafeAreaView>
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
