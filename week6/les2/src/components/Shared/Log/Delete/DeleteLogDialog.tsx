import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { deleteLog } from "@core/modules/logs/api";
import AlertDialog from "@design/Dialog/AlertDialog";

type Props = {
  id: number;
  onDismiss: () => void;
  onDelete: () => void;
};

const DeleteLogDialog = ({ id, onDismiss, onDelete }: Props) => {
  const { mutate, isError, error } = useMutation({
    mutationFn: deleteLog,
    onSuccess: () => onDelete(),
  });

  const handleDelete = () => {
    mutate(id);
  };

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  return (
    <AlertDialog
      title="Remove log item"
      description="Are you sure you want to remove this log item?"
      onDismiss={onDismiss}
      onAction={handleDelete}
      actionText="Delete"
    />
  );
};

export default DeleteLogDialog;
