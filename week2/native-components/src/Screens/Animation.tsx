import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const Animation = () => {
  return (
    <View style={styles.flex}>
      <AnimatedLottieView
        autoPlay
        style={{ width: 200 }}
        source={require("../../assets/animations/126629-bouncing-ball-morphing.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Animation;
