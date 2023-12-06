import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const AppLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
};

export default AppLayout;
