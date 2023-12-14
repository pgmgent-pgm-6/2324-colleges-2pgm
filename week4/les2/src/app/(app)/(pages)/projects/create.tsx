import { useQueryClient } from "@tanstack/react-query";
import ProjectForm from "@shared/Projects/ProjectForm";
import { createProject } from "@core/modules/projects/api";
import DefaultView from "@design/View/DefaultView";
import isVoid from "@core/utils/isVoid";
import { Project } from "@core/modules/projects/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import useTitle from "@core/hooks/useTitle";

const ProjectCreateScreen = () => {
  useTitle("Create project");
  const router = useRouter();
  const { clientId } = useLocalSearchParams<{ clientId?: string }>();
  const queryClient = useQueryClient();

  const handleSuccess = (data: Project) => {
    queryClient.invalidateQueries({ queryKey: ["projects"] });
    queryClient.invalidateQueries({ queryKey: ["clients", [data.client_id]] });
    router.back();
  };

  return (
    <DefaultView>
      <ProjectForm
        updateMethod={createProject}
        onSuccess={handleSuccess}
        initialValues={{ client_id: clientId ? parseInt(clientId) : null, name: "" }}
        label="Create"
      />
    </DefaultView>
  );
};

export default ProjectCreateScreen;
