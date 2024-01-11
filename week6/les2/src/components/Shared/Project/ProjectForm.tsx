import * as yup from "yup";
import { View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import AppTextField from "@shared/Formik/AppTextField";
import ErrorMessage from "@design/Text/ErrorMessage";
import AppForm from "@shared/Formik/AppForm";
import AppSubmitButton from "@shared/Formik/AppSubmitButton";
import ClientSpinnerField from "@shared/Client/ClientSpinnerField";
import { CreateProjectBody, UpdateProjectBody } from "@core/modules/projects/types";

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  client_id: yup.number().required(),
});

type Options = {
  showClient: boolean;
};

const defaultOptions: Options = {
  showClient: true,
};

type Props<T, U> = {
  initialValues: T;
  onSuccess: (data: U) => void;
  updateMethod: (values: T) => Promise<U>;
  label: string;
  options?: Partial<Options>;
};

const ProjectForm = <T extends CreateProjectBody | UpdateProjectBody, U>({
  initialValues,
  onSuccess,
  updateMethod,
  options,
  label,
}: Props<T, U>) => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateMethod,
    onSuccess: onSuccess,
  });

  const handleSubmit = async (values: T) => {
    mutate(values);
  };

  const formOptions = { ...defaultOptions, ...options };

  return (
    <AppForm initialValues={{ ...initialValues }} validationSchema={schema} onSubmit={handleSubmit}>
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppTextField name="name" label="Project name" disabled={isPending} />
        {formOptions.showClient && (
          <ClientSpinnerField name="client_id" label="Client" disabled={isPending} />
        )}
        <AppSubmitButton disabled={isPending}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default ProjectForm;
