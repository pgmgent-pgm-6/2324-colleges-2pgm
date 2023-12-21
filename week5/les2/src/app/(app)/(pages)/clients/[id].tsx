import { getClientById } from "@core/modules/clients/api";
import { ClientWithRelations } from "@core/modules/clients/types";
import { Project } from "@core/modules/projects/types";
import HeaderButton from "@design/Button/HeaderButton";
import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import ListItemButton from "@design/List/ListItemButton";
import DefaultView from "@design/View/DefaultView";
import ClientHeader from "@shared/Client/List/ClientHeader";
import DataView from "@shared/Data/DataView";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { FlatList } from "react-native";

enum ListType {
  Header = "header",
  Button = "button",
}

type Item = {
  type?: ListType;
  [key: string]: any;
};

const ClientDetailScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    navigation.setOptions({
      presentation: "modal",
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

  const renderItem = ({ item }: { item: Item }) => {
    if (item.type === ListType.Header) {
      return <ClientHeader client={item as ClientWithRelations} />;
    } else if (item.type === ListType.Button) {
      return (
        <ListItemButton
          onPress={() => {
            router.push({
              pathname: "/projects/create",
              params: { clientId: id },
            });
          }}
          icon="plus"
          title="Add project"
        />
      );
    } else {
      return (
        <ListItem
          onPress={() => {
            router.push(`/projects/${item.id}`);
          }}
          title={item.name}
        />
      );
    }
  };

  return (
    <DataView
      method={() => getClientById(id)}
      name={["clients", id]}
      showTitle={true}
      getTitle={(data: ClientWithRelations) => data.name}
      render={(client: ClientWithRelations) => (
        <DefaultView padding={false}>
          <FlatList
            ItemSeparatorComponent={() => <Divider />}
            data={[
              {
                type: "header",
                ...client,
              },
              {
                type: "button",
              },
              ...client.projects,
            ]}
            renderItem={renderItem}
          />
        </DefaultView>
      )}
    />
  );
};

export default ClientDetailScreen;
