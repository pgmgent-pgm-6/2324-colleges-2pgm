import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const list: string[] = ["VVD", "PVV", "GroenLinks-PVDA", "BBB", "NSC"];

const Oefening2 = () => {
  const [index, setIndex] = useState<number>(0);
  const [time, setTime] = useState<number>(1000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(index + 1 >= list.length ? 0 : index + 1);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <View style={styles.container}>
      <Button title="-" disabled={time === 0} onPress={() => setTime(Math.max(0, time - 1000))} />
      <Text>{list[index]}</Text>
      <Button title="+" onPress={() => setTime(time + 1000)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Oefening2;
