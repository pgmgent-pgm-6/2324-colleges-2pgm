import { getProjectById } from "@core/modules/projects/api";
import { Project } from "@core/modules/projects/types";
import HeaderButton from "@design/Button/HeaderButton";
import Text from "@design/Text/Text";
import DataView from "@shared/Data/DataView";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const ProjectDetailScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();

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
      render={(data: Project) => (
        <View>
          <Text>{data.name}</Text>
        </View>
      )}
    />
  );
};

export default ProjectDetailScreen;
