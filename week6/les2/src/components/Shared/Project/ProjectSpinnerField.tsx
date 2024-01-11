import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@core/modules/projects/api";
import AppSpinnerField, { AppSpinnerFieldProps } from "../Formik/AppSpinnerField";

const ProjectSpinnerField = ({ name, ...rest }: Omit<AppSpinnerFieldProps, "items">) => {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (!data) {
    return null;
  }

  return (
    <AppSpinnerField
      name={name}
      items={[...data.map((item) => ({ value: item.id, label: item.name }))]}
      {...rest}
    />
  );
};

export default ProjectSpinnerField;
