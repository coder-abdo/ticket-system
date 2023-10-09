import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  closeDeleteModal,
  openDeleteModal,
} from "@/features/deleteModal/deleteModalSlice";

export const useModalDelete = () => {
  const dispatch = useAppDispatch();
  const handleOpenDeleteModal = () => dispatch(openDeleteModal());
  const handleCloseDeleteModal = () => dispatch(closeDeleteModal());
  const isOpen = useAppSelector((state) => state.deleteModal.isOpen);
  return { handleOpenDeleteModal, handleCloseDeleteModal, isOpen };
};
