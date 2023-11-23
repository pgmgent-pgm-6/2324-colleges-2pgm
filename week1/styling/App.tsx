import AppContainer from "@shared/AppContainer";
import { Variables } from "@style";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginScreen from "src/app/LoginScreen";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <LoginScreen />
        <StatusBar style="auto" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Variables.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
