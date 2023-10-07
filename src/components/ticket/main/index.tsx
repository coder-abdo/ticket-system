import type { FC } from "react";
import { Header } from "@/components/ticket/main/header";
import { TicketDetails } from "@/components/ticket/main/ticketDetails";
import { Ticket } from "@/types";

interface Props {
  ticket: Ticket;
}

export const Main: FC<Props> = ({ ticket }) => {
  return (
    <div className="py-5 px-5 rounded-sm shadow-md shadow-gray-200 flex-1">
      <Header {...ticket} />
      <TicketDetails ticket={ticket} />
    </div>
  );
};
