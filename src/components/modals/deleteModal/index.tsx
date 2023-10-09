import { ModalIcon } from "@/components/main/addTicketModal/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteTicket } from "@/hooks/useDeleteTicket";
import { useModalDelete } from "@/hooks/useOpenDeleteModal";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
interface Props {
  id: number;
}
export const DeleteAlert: FC<Props> = ({ id }) => {
  const { handleDeleteTicket } = useDeleteTicket();
  const { handleCloseDeleteModal, isOpen } = useModalDelete();
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-[425px] md:max-w-[638px]">
        <DialogHeader className="flex items-center flex-row gap-2">
          <ModalIcon icon={AiFillPlusCircle} />
          <div className="flex-1">
            <DialogTitle className="text-red-500 text-xl font-medium">
              Are You Sure??
            </DialogTitle>
            <DialogDescription className="text-darkGray text-sm">
              by deleting you will never restore the ticket again!!
            </DialogDescription>
          </div>
          <AiOutlineClose className="text-gray text-2xl hover:cursor-pointer" />
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleCloseDeleteModal}
            className="flex-1 capitalize bg-transparent border border-primaryBlue hover:bg-transparent text-gray-700 text-base font-semibold"
          >
            cancel
          </Button>
          <Button
            type="submit"
            onClick={() => handleDeleteTicket(id)}
            className="flex-1 capitalize bg-red-500 text-base font-semibold text-white hover:bg-red-500"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
