import { useQuery } from "@tanstack/react-query";
import { getClients } from "@core/modules/clients/api";
import AppSpinnerField, { AppSpinnerFieldProps } from "../Formik/AppSpinnerField";

const ClientSpinnerField = (props: Omit<AppSpinnerFieldProps, "items">) => {
  const { data } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (!data) {
    return null;
  }

  return (
    <AppSpinnerField
      name={props.name}
      items={data.map((item) => ({ value: item.id, label: item.name }))}
      {...props}
    />
  );
};

export default ClientSpinnerField;
