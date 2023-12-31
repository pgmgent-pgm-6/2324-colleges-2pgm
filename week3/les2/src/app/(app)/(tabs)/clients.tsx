import { getClients } from "@core/modules/clients/api";
import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/LoadingIndicator";
import ErrorMessage from "@design/Text/ErrorMessage";
import CenteredView from "@design/View/CenteredView";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

const ClientsScreen = () => {
  const router = useRouter();
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getClients,
    queryKey: ["clients"],
  });

  if (isError) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !data) {
    return (
      <CenteredView>
        <LoadingIndicator />
      </CenteredView>
    );
  }

  if (!data) {
    return null;
  }

  if (data.length === 0) {
    return (
      <EmptyView
        title="Nog geen klant"
        description="Maak nu je eerste klant aan"
        onPress={() => {}}
        icon="briefcase-account"
      />
    );
  }

  return (
    <DefaultView padding={false}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            onPress={() =>
              router.push({
                pathname: "/clients/:id",
                params: { id: item.id },
              })
            }
          />
        )}
      />
    </DefaultView>
  );
};

export default ClientsScreen;
