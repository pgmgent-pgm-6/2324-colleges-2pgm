import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import { StyleSheet, Text, View } from "react-native";

const LocationCheck = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Geen permissie");
        return;
      }
      setLocation(location);
    })();
  }, []);

  let content;

  if (error) {
    content = <Text>{error}</Text>;
  } else if (location) {
    content = (
      <Text>
        Jouw locatie is {location.coords.latitude}, {location.coords.longitude}
      </Text>
    );
  } else {
    content = <Text>Zoeken...</Text>;
  }

  return <View style={styles.flex}>{content}</View>;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationCheck;
