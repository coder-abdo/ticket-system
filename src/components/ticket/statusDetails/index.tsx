import { useFetchStatus, useFetchTicketById } from "@/hooks/useFetch";
import { StatusOptions } from "@/components/ticket/statusDetails/statusOptions";
import { FC } from "react";
import { StatusInformations } from "@/components/ticket/statusDetails/statusInformations";
interface Props {
  id: number;
}
export const StatusSide: FC<Props> = ({ id }) => {
  const { status, isLoading, error } = useFetchStatus();
  const {
    ticket,
    error: ticketError,
    isLoading: isTicketLoading,
  } = useFetchTicketById(id);
  if (isLoading || isTicketLoading) {
    return <div>loading</div>;
  }
  if (error || ticketError) {
    return <div>error fetching data</div>;
  }
  return (
    <aside>
      <StatusOptions status={status} statue={ticket.status} />
      <StatusInformations />
    </aside>
  );
};
