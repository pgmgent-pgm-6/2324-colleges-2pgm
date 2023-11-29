import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, StatusBar, Text } from "react-native";

const Oefening4 = () => {
  const [text, setText] = useState<string>("");

  const handleChangeText = (text: string) => {
    if (text.length < 160) {
      setText(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        maxLength={160}
        placeholder="Write a story max 160 characters..."
      />
      <Text>{text.length}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Oefening4;
