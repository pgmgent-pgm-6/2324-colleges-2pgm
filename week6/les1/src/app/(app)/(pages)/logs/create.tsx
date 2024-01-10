import { DATE_FORMAT } from "@core/constants";
import useTitle from "@core/hooks/useTitle";
import { createLog } from "@core/modules/logs/api";
import DefaultView from "@design/View/DefaultView";
import LogForm from "@shared/Log/LogForm";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useLocalSearchParams, useRouter } from "expo-router";

const defaultValues = {
  comment: "",
  time: 0,
  date: format(Date.now(), DATE_FORMAT),
  project_id: null,
};

const LogCreateScreen = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { date, projectId } = useLocalSearchParams<{ projectId?: string; date?: string }>();
  useTitle("Create log");

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["logs"] });
    queryClient.invalidateQueries({ queryKey: ["projects"] });
    router.back();
  };

  let initialData = { ...defaultValues };
  if (date) {
    initialData = { ...initialData, date };
  }
  if (projectId) {
    initialData = { ...initialData, project_id: projectId };
  }

  return (
    <DefaultView>
      <LogForm
        updateMethod={createLog}
        onSuccess={handleSuccess}
        label="Create"
        initialValues={initialData}
        options={projectId ? { showProject: false } : {}}
      />
    </DefaultView>
  );
};

export default LogCreateScreen;
