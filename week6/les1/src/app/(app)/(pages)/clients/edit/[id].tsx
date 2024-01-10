import useTitle from "@core/hooks/useTitle";
import { getClientById, updateClient } from "@core/modules/clients/api";
import DefaultView from "@design/View/DefaultView";
import ClientForm from "@shared/Client/ClientForm";
import DataView from "@shared/Data/DataView";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";

const ClientEditScreen = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  useTitle("Edit client");

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["clients"] });
    router.back();
  };

  return (
    <DataView
      name={["clients", id]}
      method={() => getClientById(id)}
      render={(client) => (
        <DefaultView>
          <ClientForm
            updateMethod={updateClient}
            initialValues={client}
            onSuccess={handleSuccess}
            label="Update"
          />
        </DefaultView>
      )}
    />
  );
};

export default ClientEditScreen;
