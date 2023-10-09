import { useAppDispatch } from "@/app/hooks";
import { openEditModal } from "@/features/editTicketModal/editTicketModalSlice";

export const useOpenEditModal = () => {
  const dispatch = useAppDispatch();
  const handleOpenEditModal = () => dispatch(openEditModal());
  return { handleOpenEditModal };
};
