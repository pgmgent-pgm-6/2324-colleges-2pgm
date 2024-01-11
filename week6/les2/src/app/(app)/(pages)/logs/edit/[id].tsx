import { useQueryClient } from "@tanstack/react-query";
import { getLogById, updateLog } from "@core/modules/logs/api";
import DataView from "@shared/Data/DataView";
import LogForm from "@shared/Log/LogForm";
import { useEffect, useState } from "react";
import DeleteLogDialog from "@shared/Log/Delete/DeleteLogDialog";
import DefaultView from "@design/View/DefaultView";
import HeaderButton from "@design/Button/HeaderButton";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Log, LogWithRelations } from "@core/modules/logs/types";
import useTitle from "@core/hooks/useTitle";

const prepareValues = (log: LogWithRelations) => {
  const { project, ...rest } = log;
  return rest;
};

const LogEditScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const queryClient = useQueryClient();

  useTitle("Edit log");

  const handleSuccess = (data: Log) => {
    queryClient.invalidateQueries({ queryKey: ["logs"] }); // multiple at once to be sure
    queryClient.invalidateQueries({ queryKey: ["projects", data.project_id] });
    router.back();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton onPress={() => {}} title="Delete log" icon="trash-can" />,
      title: "Edit log",
    });
  }, [navigation]);

  return (
    <>
      <DataView
        name={["logs", id]}
        method={() => getLogById(parseInt(id))}
        render={(log: LogWithRelations) => {
          return (
            <DefaultView>
              <LogForm
                updateMethod={updateLog}
                initialValues={{ ...prepareValues(log) }}
                onSuccess={handleSuccess}
                label="Update"
              />
            </DefaultView>
          );
        }}
      />
    </>
  );
};

export default LogEditScreen;
