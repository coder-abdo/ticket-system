import { queryClient } from "@/app/clientQuery";
import { deleteTicket } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useModalDelete } from "./useOpenDeleteModal";

export const useDeleteTicket = () => {
  const { handleCloseDeleteModal } = useModalDelete();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (id: number) =>
      deleteTicket(`${import.meta.env.VITE_BASE_URL}/tickets`, id),
    mutationKey: ["deleteKey"],
  });
  const handleDeleteTicket = (id: number) => {
    mutate(id, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["tickets"] });
        handleCloseDeleteModal();
        navigate("/");
      },
    });
  };
  return { handleDeleteTicket };
};
