import { getProjects } from "@core/modules/projects/api";
import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import LoadingIndicator from "@design/LoadingIndicator";
import ErrorMessage from "@design/Text/ErrorMessage";
import CenteredView from "@design/View/CenteredView";
import DefaultView from "@design/View/DefaultView";
import EmptyView from "@design/View/EmptyView";
import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";

const ProjectsScreen = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getProjects,
    queryKey: ["projects"],
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
        title="Nog geen project"
        description="Maak nu je eerste project aan"
        onPress={() => {}}
        icon="folder"
      />
    );
  }

  return (
    <DefaultView padding={false}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => <ListItem title={item.name} onPress={() => {}} />}
      />
    </DefaultView>
  );
};

export default ProjectsScreen;
