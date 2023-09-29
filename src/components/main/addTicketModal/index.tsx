import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";
import { PiStackSimpleBold } from "react-icons/pi";
import { ModalIcon } from "@/components/main/addTicketModal/icon";
import { BsCheckCircleFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { closeModal } from "@/features/addModal/addModalSlice";
import { openCreatedModal } from "@/features/createModal/createModalSlice";
const AddModalTicket = () => {
  const isOpen = useAppSelector((state) => state.addModal.isOpen);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(openCreatedModal());
    dispatch(closeModal());
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex gap-4 items-start">
            <ModalIcon icon={AiOutlinePlusCircle} />
            <div className="flex-1">
              <DialogTitle className="text-gray-900 text-lg capitalize">
                Create Now Ticket
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-sm">
                Chose Ticket type to create new ticket{" "}
              </DialogDescription>
            </div>
            <AiOutlineClose
              className="text-xl text-gray-500 hover:cursor-pointer"
              onClick={() => dispatch(closeModal())}
            />
          </div>
        </DialogHeader>
        <div className="rounded-lg py-4 px-2 bg-[#edf3f6] flex gap-2 justify-between">
          <ModalIcon icon={PiStackSimpleBold} isSecondary />
          <div className="flex-1">
            <h4 className="text-blackColor text-sm font-medium">
              Create Company Ticket
            </h4>
            <p className="text-darkGray text-sm">
              Creating a new ticket to be sent between company departments
            </p>
          </div>
          <BsCheckCircleFill className="text-primaryBlue" />
        </div>
        <DialogFooter className="flex gap-2">
          <Button
            onClick={() => dispatch(closeModal())}
            className="flex-1 capitalize bg-transparent border border-primaryBlue hover:bg-transparent text-gray-700 text-base font-semibold"
          >
            cancel
          </Button>
          <Button
            onClick={handleClick}
            className="flex-1 capitalize bg-primaryBlue text-base font-semibold text-white hover:bg-primaryBlue"
          >
            confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddModalTicket;
