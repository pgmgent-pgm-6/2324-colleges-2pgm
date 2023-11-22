import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const list: string[] = ["VVD", "PVV", "GroenLinks-PVDA", "BBB", "NSC"];

const Oefening1 = () => {
  const [search, setSearch] = useState<string>("");

  const filteredList = list.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Vul zoekterm in"
      />
      <FlatList data={filteredList} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Oefening1;
