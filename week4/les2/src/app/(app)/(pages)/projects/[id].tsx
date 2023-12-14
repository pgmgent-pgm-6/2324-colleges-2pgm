import { getProjectById } from "@core/modules/projects/api";
import { Project } from "@core/modules/projects/types";
import Text from "@design/Text/Text";
import DataView from "@shared/Data/DataView";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ProjectDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <DataView
      method={() => getProjectById(id)}
      name={["projects", id]}
      showTitle={true}
      getTitle={(data: Project) => data.name}
      render={(data: Project) => (
        <View>
          <Text>{data.name}</Text>
        </View>
      )}
    />
  );
};

export default ProjectDetailScreen;
