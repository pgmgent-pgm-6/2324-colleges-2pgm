import useTitle from "@core/hooks/useTitle";
import { createClient } from "@core/modules/clients/api";
import DefaultView from "@design/View/DefaultView";
import ClientForm from "@shared/Client/ClientForm";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";

const ClientCreateScreen = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  useTitle("Add client");

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["clients"] });
    router.back();
  };

  return (
    <DefaultView>
      <ClientForm
        updateMethod={createClient}
        onSuccess={handleSuccess}
        initialValues={{ name: "" }}
        label="Create"
      />
    </DefaultView>
  );
};

export default ClientCreateScreen;
