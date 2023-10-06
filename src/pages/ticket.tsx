import { useParams } from "react-router-dom";
import { TicketNavigation } from "@/components/ticketNav";
import { TicketSidebar } from "@/components/ticket/sidebar";
import { Main } from "@/components/ticket/main";
import { StatusSide } from "@/components/ticket/statusDetails";
const TicketPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TicketNavigation />
      <main className="flex gap-5 py-3 pr-4">
        <TicketSidebar />
        <Main id={+id!} />
        <StatusSide id={+id!} />
      </main>
    </div>
  );
};

export default TicketPage;
