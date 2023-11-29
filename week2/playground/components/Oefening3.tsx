import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

const Oefening3 = () => {
  const [index, setIndex] = useState<number>(5);

  useEffect(() => {
    if (index >= 10) {
      alert("Je hebt gewonnen!");
    }
  }, [index]);

  return (
    <View>
      <Text>Oefening 3</Text>
      <Text>{index}</Text>
      <Button onPress={() => setIndex(index + 1)} title="+" />
      <Button disabled={index === 0} onPress={() => setIndex(index - 1)} title="-" />
    </View>
  );
};

export default Oefening3;
