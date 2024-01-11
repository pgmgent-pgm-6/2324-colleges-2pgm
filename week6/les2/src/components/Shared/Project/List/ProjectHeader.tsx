import { StyleSheet, View } from "react-native";
import { formatTimeToString } from "@core/modules/logs/utils";
import { getTotalLogTime } from "@core/modules/projects/utils";
import { Variables } from "@style";
import ListHeader from "@design/List/ListHeader";
import Text from "@design/Text/Text";
import { ProjectWithRelations } from "@core/modules/projects/types";

type Props = {
  project: ProjectWithRelations;
};

const ProjectHeader = ({ project }: Props) => {
  return (
    <ListHeader title={project.name} subTitle="Logs">
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.label}>Client</Text>
          <Text>{project.client.name}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Total time</Text>
          <Text>{formatTimeToString(getTotalLogTime(project))}</Text>
        </View>
      </View>
    </ListHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Variables.sizes.small,
  },
  column: {
    flex: 1,
  },
  label: {
    color: Variables.colors.gray,
    marginRight: Variables.sizes.large,
  },
});

export default ProjectHeader;
