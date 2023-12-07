import { getClientById } from "@core/modules/clients/api";
import Text from "@design/Text/Text";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ClientDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryFn: () => getClientById(id),
    queryKey: ["clients", id],
  });

  if (!data) {
    return null;
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default ClientDetailScreen;
