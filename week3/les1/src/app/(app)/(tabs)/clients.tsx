import { getClients } from "@core/modules/clients/api";
import { Client } from "@core/modules/clients/types";
import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/LoadingIndicator";
import ErrorMessage from "@design/Text/ErrorMessage";
import Text from "@design/Text/Text";
import CenteredView from "@design/View/CenteredView";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const ClientsScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [list, setList] = useState<Client[] | null>();

  useEffect(() => {
    setIsLoading(true);
    getClients()
      .then((data) => setList(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return (
      <DefaultView>
        <ErrorMessage error={error} />
      </DefaultView>
    );
  }

  if (isLoading || !list) {
    return (
      <CenteredView>
        <LoadingIndicator />
      </CenteredView>
    );
  }

  if (!list) {
    return null;
  }

  if (list.length === 0) {
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
    <DefaultView>
      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => <ListItem title={item.name} onPress={() => {}} />}
      />
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default ClientsScreen;
