import { StyleSheet, View } from "react-native";
import Button from "@design/Button/Button";
import TextField from "@design/Form/TextField";
import Logo from "@design/Logo/Logo";
import Title from "@design/Text/Title";
import { Variables } from "@style";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Title style={styles.title}>Login met je account</Title>
      <TextField
        label="Email"
        name="email"
        value=""
        placeholder="john@doe.com"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={(text: string) => {}}
      />
      <TextField label="Password" name="password" value="" secureTextEntry={true} onChangeText={() => {}} />
      <Button onPress={() => {}} style={styles.button}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Variables.sizes.horizontalPadding,
    alignItems: "center",
  },
  title: {
    marginTop: Variables.sizes.medium,
    marginBottom: Variables.sizes.xl,
  },
  button: {
    marginTop: Variables.sizes.xs,
    width: "100%",
  },
});

export default LoginScreen;
