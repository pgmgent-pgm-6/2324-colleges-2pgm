import { getClients } from "@core/modules/clients/api";
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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => router.push("/clients/create")} title="Add client" icon="plus" />
      ),
    });
  }, [navigation]);

  return (
    <DataListView
      method={getClients}
      name={["clients"]}
      emptyTitle="Nog geen klant"
      emptyDescription="Maak nu je eerste klant aan"
      emptyIcon="briefcase-account"
      onAddItem={() => {}}
      renderItem={({ item }) => <ListItem title={item.name} onPress={handleAddClient} />}
    />
  );
};

export default ClientsScreen;
