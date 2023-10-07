import { Ticket } from "@/types";
import { FC } from "react";
import { format } from "date-fns";
interface Props {
  ticket: Ticket;
}
export const Details: FC<Props> = ({ ticket }) => {
  return (
    <>
      <div className="flex justify-between gap-10 mb-5">
        <h6 className="text-sm text-darkGray font-medium">send by</h6>
        <h5 className="text-base text-blackColor">yara ayad</h5>
      </div>
      <div className="flex justify-between gap-10 mb-5">
        <h6 className="text-sm text-darkGray font-medium">Department</h6>
        <h5 className="text-base text-blackColor">{ticket.to ?? "IT"}</h5>
      </div>
      <div className="flex justify-between gap-10 mb-5">
        <h6 className="text-sm text-darkGray font-medium">assigned to</h6>
        <h5 className="text-base text-blackColor">{ticket.from ?? "HR"}</h5>
      </div>
      <div className="flex justify-between gap-10 mb-5">
        <h6 className="text-sm text-darkGray font-medium">status</h6>
        <h5 className="text-base text-blackColor">{ticket.status ?? "Open"}</h5>
      </div>
      <div className="flex justify-between gap-10">
        <h6 className="text-sm text-darkGray font-medium">created time</h6>
        <h5 className="text-base text-blackColor">
          {format(new Date(), "dd MMM yyyy, hh:mm")}
        </h5>
      </div>
    </>
  );
};
