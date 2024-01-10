import { formatDate, formatTimeToString } from "@core/modules/logs/utils";
import { getProjectById } from "@core/modules/projects/api";
import { Project, ProjectWithRelations } from "@core/modules/projects/types";
import HeaderButton from "@design/Button/HeaderButton";
import Divider from "@design/List/Divider";
import ListItem from "@design/List/ListItem";
import ListItemButton from "@design/List/ListItemButton";
import DefaultView from "@design/View/DefaultView";
import DataView from "@shared/Data/DataView";
import ProjectHeader from "@shared/Project/List/ProjectHeader";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { FlatList } from "react-native";

enum ListType {
  Header = "header",
  Button = "button",
}

type ListItem = {
  type?: ListType;
  [key: string]: any;
};

const ProjectDetailScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();

  const renderItem = ({ item }: { item: ListItem }) => {
    if (item.type === ListType.Header) {
      return <ProjectHeader project={item as ProjectWithRelations} />;
    } else if (item.type === ListType.Button) {
      return (
        <ListItemButton
          onPress={() => {
            router.push({
              pathname: "/logs/create",
              params: {
                projectId: id,
              },
            });
          }}
          icon="plus"
          title="Add log"
        />
      );
    } else {
      return (
        <ListItem
          title={item.comment}
          description={`${formatDate(item.date)}`}
          right={formatTimeToString(item.time)}
          onPress={() => {
            router.push(`/logs/edit/${item.id}`);
          }}
        />
      );
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => router.push(`/projects/edit/${id}`)} title="Edit" icon="pencil" />
      ),
    });
  }, [navigation]);

  return (
    <DataView
      method={() => getProjectById(id)}
      name={["projects", id]}
      showTitle={true}
      getTitle={(data: Project) => data.name}
      render={(project: Project) => (
        <DefaultView padding={false}>
          <FlatList
            ItemSeparatorComponent={() => <Divider />}
            keyExtractor={(item) => item.type ?? item.id}
            data={[{ type: "header", ...project }, ...project.logs, { type: "button" }]}
            renderItem={renderItem}
          />
        </DefaultView>
      )}
    />
  );
};

export default ProjectDetailScreen;
