import { useAppSelector } from "@/app/hooks";
import { useFetchTickets } from "@/hooks/useFetch";
import { EmptyTickets } from "@/components/tickets/emptyTickets";
import Tickets from "@/components/tickets";

export const AllTickets = () => {
  const { error, isLoading } = useFetchTickets();
  const tickets = useAppSelector((state) => state.allTickets.tickets);
  if (error) {
    return <div> "something went wrong"</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {tickets.length > 0 ? <Tickets tickets={tickets} /> : <EmptyTickets />}
    </div>
  );
};
