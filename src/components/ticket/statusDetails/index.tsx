import { useFetchStatus, useFetchTicketById } from "@/hooks/useFetch";
import { StatusOptions } from "./statusOptions";
import { FC } from "react";
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
    <aside className="shadow-gray-200 shadow-md">
      <StatusOptions status={status} statue={ticket.status} />
    </aside>
  );
};
