import { useParams } from "react-router-dom";
import { TicketNavigation } from "@/components/ticketNav";
import { TicketSidebar } from "@/components/ticket/sidebar";
import { Main } from "@/components/ticket/main";
import { StatusSide } from "@/components/ticket/statusDetails";
import { useFetchTicketById } from "@/hooks/useFetch";
import { EditTicketModal } from "@/components/modals/editModal";
const TicketPage = () => {
  const { id } = useParams();
  const { ticket, isLoading, error } = useFetchTicketById(+id!);
  return (
    <div>
    <EditTicketModal />
      <TicketNavigation />
      <main className="flex gap-5 py-3 pr-4">
        <TicketSidebar />
        {isLoading ? <div>loading</div> : <Main ticket={ticket} />}
        {error instanceof Error && <div>no task with id {id}</div>}
        <StatusSide id={+id!} />
      </main>
    </div>
  );
};

export default TicketPage;
