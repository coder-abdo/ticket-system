import type { FC } from "react";
import { format } from "date-fns";
import { Ticket } from "@/types";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/app/clientQuery";
interface Props {
  ticket: Ticket;
}
export const TicketItem: FC<Props> = ({ ticket }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/tickets/${ticket.id}`);
    queryClient.fetchQuery({ queryKey: ["ticket"], retry: true });
  };
  return (
    <li
      className={`border-l-4 ${
        ticket.status.toLocaleLowerCase() === "Open".toLocaleLowerCase()
          ? "border-[#FFD360]"
          : ticket.status.toLocaleLowerCase() === "Closed".toLocaleLowerCase()
          ? "border-[#5FD971]"
          : "border-[#5B8DEF]"
      } p-2 hover:cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-between px-2">
        <h4 className="text-sm ">User Name</h4>
        <div
          className={`flex justify-center items-center ${
            ticket.status.toLocaleLowerCase() === "Open".toLocaleLowerCase()
              ? "bg-[#fffaec] text-[#FFD360]"
              : ticket.status.toLocaleLowerCase() ===
                "Closed".toLocaleLowerCase()
              ? "bg-[#e9f8eb] text-[#5FD971]"
              : "bg-[#ebf1fd] text-[#5B8DEF]"
          } text-xs px-6 py-3`}
        >
          {ticket.status}
        </div>
      </div>
      <div className="flex justify-between pl-2 mt-4 pr-7">
        <div>
          <p className="text-xs text-darkGray capitalize mb-1 flex items-center flex-wrap gap-4">
            <span>{format(new Date(), "dd MMM yyyy")}</span>
            <span className="bg-[#D9D9D9] w-1 h-1 rounded-full mx-1" />
            <span>From: {ticket.from}</span>
            <span className="text-darkGray text-xs block">to: {ticket.to}</span>
          </p>
          <h5 className="text-darkGray text-xs mt-2">Branch</h5>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
      </div>
    </li>
  );
};
