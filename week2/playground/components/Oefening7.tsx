import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ColorValue } from "react-native";

interface CircleProps {
  color: ColorValue;
}

const Circle = ({ color }: CircleProps) => {
  return <View style={[styles.circle, { backgroundColor: color }]}></View>;
};

const ColorSwitch = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeColor}>
        <View style={styles.button}>
          <Text>Switch color</Text>
        </View>
      </TouchableOpacity>
      <Circle color={colors[currentColorIndex]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ColorSwitch;
