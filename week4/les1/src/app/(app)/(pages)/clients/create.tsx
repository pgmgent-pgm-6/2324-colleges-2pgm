import { useTitle } from "@core/hooks/useTitle";
import { createClient } from "@core/modules/clients/api";
import DefaultView from "@design/View/DefaultView";
import ClientForm from "@shared/Clients/ClientForm";

const ClientCreateScreen = () => {
  useTitle("Add client");

  return (
    <DefaultView>
      <ClientForm
        updateMethod={createClient}
        onSuccess={() => {}}
        initialValues={{ name: "" }}
        label="Create"
      />
    </DefaultView>
  );
};

export default ClientCreateScreen;
