import { CreateClientBody, UpdateClientBody } from "@core/modules/clients/types";
import ErrorMessage from "@design/Text/ErrorMessage";
import AppForm from "@shared/Formik/AppForm";
import AppSubmitButton from "@shared/Formik/AppSubmitButton";
import AppTextField from "@shared/Formik/AppTextField";
import { useMutation } from "@tanstack/react-query";
import { View } from "react-native";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
});

type Props<T, U> = {
  initialValues: T;
  onSuccess: (data: U) => void;
  updateMethod: (values: T) => Promise<U>;
  label: string;
};

const ClientForm = <T extends CreateClientBody | UpdateClientBody, U>({
  initialValues,
  onSuccess,
  updateMethod,
  label,
}: Props<T, U>) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateMethod,
    onSuccess: onSuccess,
  });

  const handleSubmit = (data: T) => {
    mutate(data);
  };

  return (
    <AppForm initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppTextField name="name" label="Client name" disabled={isPending} />
        <AppSubmitButton disabled={isPending}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default ClientForm;
