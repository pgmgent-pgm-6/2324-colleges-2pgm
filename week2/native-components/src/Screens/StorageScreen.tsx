import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_LIST = "list";

const StorageScreen = () => {
  const [list, setList] = useState<string[]>();

  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem(KEY_LIST);
      setList(value ? JSON.parse(value) : []);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (list) {
        await AsyncStorage.setItem(KEY_LIST, JSON.stringify(list));
      }
    })();
  }, [list]);

  if (!list) {
    return null;
  }

  return (
    <View style={styles.flex}>
      <Button
        title="Toevoegen"
        onPress={() => {
          setList([...list, `Item ${list.length + 1}`]);
        }}
      />
      {list.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    width: "100%",
    flex: 1,
  },
});

export default StorageScreen;
