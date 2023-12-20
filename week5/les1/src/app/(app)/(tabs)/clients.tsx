import { getClients } from "@core/modules/clients/api";
import { Client } from "@core/modules/clients/types";
import HeaderButton from "@design/Button/HeaderButton";
import ListItem from "@design/List/ListItem";
import DataListView from "@shared/Data/DataListView";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";

const ClientsScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const handleAddClient = () => {
    router.push("/clients/create");
  };

  const handleClientPress = (client: Client) => {
    router.push(`/clients/${client.id}`);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton onPress={handleAddClient} title="Add client" icon="plus" />,
    });
  }, [navigation]);

  return (
    <DataListView
      method={getClients}
      name={["clients"]}
      emptyTitle="Nog geen klant"
      emptyDescription="Maak nu je eerste klant aan"
      emptyIcon="briefcase-account"
      onAddItem={handleAddClient}
      renderItem={({ item }) => <ListItem title={item.name} onPress={() => handleClientPress(item)} />}
    />
  );
};

export default ClientsScreen;
