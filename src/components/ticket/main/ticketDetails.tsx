import { Button } from "@/components/ui/button";
import { useModalDelete } from "@/hooks/useOpenDeleteModal";
import { useOpenEditModal } from "@/hooks/useOpenEditModal";
import { Ticket } from "@/types";
import type { FC } from "react";

interface Props {
  ticket: Ticket;
}
export const TicketDetails: FC<Props> = ({ ticket }) => {
  const { handleOpenEditModal } = useOpenEditModal();
  const { handleOpenDeleteModal } = useModalDelete();
  return (
    <section className="py-5">
      <h2 className="text-blackColor font-medium text-xl mb-4">
        {ticket.subject}
      </h2>
      <p className="text-base text-darkGray mb-4">{ticket.description}</p>
      <Button onClick={handleOpenEditModal} variant={"ghost"}>
        Edit
      </Button>
      <Button onClick={handleOpenDeleteModal} variant={"ghost"}>
        Delete
      </Button>
    </section>
  );
};
