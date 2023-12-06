import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Variables } from "@style";
import { Slot } from "expo-router";
import AppContainer from "@shared/App/AppContainer";

const AppTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Variables.colors.primary,
    background: Variables.colors.background,
    text: Variables.colors.headerText,
    card: Variables.colors.primary,
  },
};

export default function Root() {
  return (
    <ThemeProvider value={AppTheme}>
      <AppContainer>
        <Slot />
      </AppContainer>
    </ThemeProvider>
  );
}
