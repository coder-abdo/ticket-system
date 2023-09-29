import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
import { ModalIcon } from "@/components/main/addTicketModal/icon";
import { CreateTicketForm } from "@/components/main/createTicketModal/createTicketForm";
import { closeCreatedModal } from "@/features/createModal/createModalSlice";

export const CreateTicketModal = () => {
  const isOpen = useAppSelector((state) => state.createTicketModal.isOpen);
  const dispatch = useAppDispatch();
  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-[425px] md:max-w-[638px]">
        <DialogHeader className="flex items-center flex-row gap-2">
          <ModalIcon icon={AiFillPlusCircle} />
          <div className="flex-1">
            <DialogTitle className="text-blackColor text-xl font-medium">
              Create Company Ticket{" "}
            </DialogTitle>
            <DialogDescription className="text-darkGray text-sm">
              Creating a new ticket to be sent between company departments
            </DialogDescription>
          </div>
          <AiOutlineClose
            onClick={() => dispatch(closeCreatedModal())}
            className="text-gray text-2xl hover:cursor-pointer"
          />
        </DialogHeader>
        <CreateTicketForm />
      </DialogContent>
    </Dialog>
  );
};
