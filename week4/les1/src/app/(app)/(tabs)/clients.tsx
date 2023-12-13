import { getClients } from "@core/modules/clients/api";
import ListItem from "@design/List/ListItem";
import DataListView from "@shared/Data/DataListView";
import { useRouter } from "expo-router";

const ClientsScreen = () => {
  const router = useRouter();

  const handleAddClient = () => {
    router.push("/clients/add");
  };

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
