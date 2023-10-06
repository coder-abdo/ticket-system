import { Button } from "@/components/ui/button";
import type { FC } from "react";

interface Props {
  ticket: Ticket;
}
export const TicketDetails: FC<Props> = ({ ticket }) => {
  return (
    <section className="py-5">
      <h2 className="text-blackColor font-medium text-xl mb-4">
        {ticket.subject}
      </h2>
      <p className="text-base text-darkGray mb-4">{ticket.description}</p>
      <Button variant={"ghost"}>Edit</Button>
      <Button variant={"ghost"}>Delete</Button>
    </section>
  );
};
