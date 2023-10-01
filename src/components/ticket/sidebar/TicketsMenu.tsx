import type { FC } from "react";
import { TicketItem } from "@/components/ticket/sidebar/ticketItem";

interface Props {
  tickets: Ticket[];
}
export const TicketsMenu: FC<Props> = ({ tickets }) => {
  return (
    <ul className="overflow-y-scroll flex flex-col">
      {tickets.length > 0 &&
        tickets.map((ticket) => <TicketItem ticket={ticket} key={ticket.id} />)}
    </ul>
  );
};
