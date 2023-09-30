import { useParams } from "react-router-dom";
import { TicketNavigation } from "@/components/ticketNav";
import { TicketSidebar } from "@/components/ticket/sidebar";
import { useFetchTicketById } from "@/hooks/useFetch";
import { useAppSelector } from "@/app/hooks";
const TicketPage = () => {
  const { id } = useParams();
  const { isLoading, error } = useFetchTicketById(+id!);
  const ticket = useAppSelector((state) => state.ticket.ticket);
  console.log(ticket);
  if (error) {
    return <div>error in fetching data</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <TicketNavigation />
      <main>
        <TicketSidebar />
      </main>
    </div>
  );
};

export default TicketPage;
