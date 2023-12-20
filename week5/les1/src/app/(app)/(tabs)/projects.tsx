import { getProjects } from "@core/modules/projects/api";
import { Project } from "@core/modules/projects/types";
import HeaderButton from "@design/Button/HeaderButton";
import ListItem from "@design/List/ListItem";
import DataListView from "@shared/Data/DataListView";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";

const ProjectsScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const handleProjectPress = (project: Project) => {
    router.push(`/projects/${project.id}`);
  };

  const handleAddProject = () => {
    router.push("/projects/create");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton onPress={handleAddProject} title="Add project" icon="plus" />,
    });
  }, [navigation]);

  return (
    <DataListView
      method={getProjects}
      name={["projects"]}
      emptyTitle="Nog geen project"
      emptyDescription="Maak nu je eerste project aan"
      emptyIcon="folder"
      onAddItem={handleAddProject}
      renderItem={({ item }) => <ListItem title={item.name} onPress={() => handleProjectPress(item)} />}
    />
  );
};

export default ProjectsScreen;
