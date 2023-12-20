import { getClientById } from "@core/modules/clients/api";
import { Client } from "@core/modules/clients/types";
import HeaderButton from "@design/Button/HeaderButton";
import Text from "@design/Text/Text";
import DataView from "@shared/Data/DataView";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const ClientDetailScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            router.push(`/clients/edit/${id}`);
          }}
          title="Edit"
          icon="pencil"
        />
      ),
    });
  }, [navigation]);

  return (
    <DataView
      method={() => getClientById(id)}
      name={["clients", id]}
      showTitle={true}
      getTitle={(data: Client) => data.name}
      render={(data: Client) => (
        <View>
          <Text>{data.name}</Text>
        </View>
      )}
    />
  );
};

export default ClientDetailScreen;
