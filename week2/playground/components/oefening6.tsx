import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const initialItems = ["BMW", "Mercedes", "Audi", "Honda", "Ferrari", "Lexus", "Toyota"];
const Oefening6 = () => {
  const [items, setItems] = useState(initialItems);
  const [removedCount, setRemovedCount] = useState(0);
  const [removedItem, setRemovedItem] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const removed = items[randomIndex];
        const newItems = items.filter((item, index) => index !== randomIndex);

        setItems(newItems);
        setRemovedCount((prevCount) => prevCount + 1);
        setRemovedItem(removed);
      } else {
        setItems(initialItems);
        setRemovedCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <View>
      <Text>Removed Count: {removedCount}</Text>
      <Text>Removed Item: {removedItem || "-"}</Text>
      <Text>Remaining Items:</Text>
      <View>
        {items.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

export default Oefening6;
