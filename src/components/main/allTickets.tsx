import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { PiStackSimpleBold } from "react-icons/pi";
import emptyTickets from "@/assets/image.svg";
import { AddTicketButton } from "@/components/main/addTicketBtn";
import { ModalIcon } from "@/components/main/addTicketModal/icon";
import { BsCheckCircleFill } from "react-icons/bs";
export const AllTickets = () => {
  const data = [];
  return (
    <div>
      {data.length <= 0 && (
        <div className="flex h-full justify-center items-center flex-col">
          <img src={emptyTickets} alt="empty tickets" />
          <h4 className="text-blackColor font-semibold text-[18px] capitalize">
            no data to show
          </h4>
          <p className="text-sm text-mediumGray mb-8 mt-2">
            Create a new Ticket Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <Dialog>
            <DialogTrigger>
              <AddTicketButton />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <div className="flex gap-4 items-start">
                  <ModalIcon icon={AiOutlinePlusCircle} />
                  <div>
                    <DialogTitle className="text-gray-900 text-lg capitalize">
                      Create Now Ticket
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 text-sm">
                      Chose Ticket type to create new ticket{" "}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="rounded-lg py-4 px-2 bg-[#edf3f6] flex justify-between">
                <ModalIcon icon={PiStackSimpleBold} />
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
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};
