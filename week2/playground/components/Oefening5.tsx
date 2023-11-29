import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const Oefening5 = () => {
  const [value, setValue] = useState<string>("");

  const listData = value.split(",");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="add data to list..."
      />
      <FlatList data={listData} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 200,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Oefening5;
