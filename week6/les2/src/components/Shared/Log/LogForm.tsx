import * as yup from "yup";
import { View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import ProjectSpinnerField from "@shared/Project/ProjectSpinnerField";
import AppTextField from "@shared/Formik/AppTextField";
import AppSubmitButton from "@shared/Formik/AppSubmitButton";
import ErrorMessage from "@design/Text/ErrorMessage";
import AppForm from "@shared/Formik/AppForm";
import { CreateLogBody, UpdateLogBody } from "@core/modules/logs/types";
import AppTimeTextField from "@shared/Formik/AppTimeTextField";
import AppDatePickerField from "@shared/Formik/DatePicker/AppDatePickerField";

const schema = yup.object().shape({
  time: yup.number().min(1).required(),
  date: yup.string().required(),
  project_id: yup.number().required(),
  comment: yup.string().required(),
});

type Options = {
  showProject: boolean;
};

const defaultOptions: Options = {
  showProject: true,
};

type Props<T, U> = {
  initialValues: T;
  onSuccess: (data: U) => void;
  updateMethod: (values: T) => Promise<U>;
  label: string;
  options?: Partial<Options>;
};

const LogForm = <T extends CreateLogBody | UpdateLogBody, U>({
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

  const formOptions = { ...defaultOptions, ...options };

  const handleSubmit = async (values: T) => {
    mutate(values);
  };

  return (
    <AppForm initialValues={{ ...initialValues }} validationSchema={schema} onSubmit={handleSubmit}>
      <View>
        {isError && <ErrorMessage error={error} />}
        <AppDatePickerField name="date" Label="Date" disabled={isPending} />
        <AppTimeTextField
          autoFocus={true}
          name="time"
          label="Time"
          keyboardType="numeric"
          disabled={isPending}
        />
        <AppTextField name="comment" label="Description" disabled={isPending} multiline={true} />
        {formOptions.showProject && (
          <ProjectSpinnerField name="project_id" label="Project" disabled={isPending} />
        )}
        <AppSubmitButton disabled={isPending}>{label}</AppSubmitButton>
      </View>
    </AppForm>
  );
};

export default LogForm;
