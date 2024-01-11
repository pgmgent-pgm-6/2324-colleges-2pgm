import useTitle from "@core/hooks/useTitle";
import { getProjectById, updateProject } from "@core/modules/projects/api";
import DefaultView from "@design/View/DefaultView";
import ProjectForm from "@shared/Project/ProjectForm";
import DataView from "@shared/Data/DataView";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";

const ProjectEditScreen = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  useTitle("Edit project");

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["projects"] });
    router.back();
  };

  return (
    <DataView
      name={["projects", id]}
      method={() => getProjectById(id)}
      render={(project) => (
        <DefaultView>
          <ProjectForm
            updateMethod={updateProject}
            initialValues={project}
            onSuccess={handleSuccess}
            label="Update"
          />
        </DefaultView>
      )}
    />
  );
};

export default ProjectEditScreen;
