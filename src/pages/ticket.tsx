import { useParams } from "react-router-dom";
import { TicketNavigation } from "@/components/ticketNav";
import { TicketSidebar } from "@/components/ticket/sidebar";
import { Main } from "@/components/ticket/main";
const TicketPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TicketNavigation />
      <main className="flex gap-5">
        <TicketSidebar />
        <Main id={+id!} />
      </main>
    </div>
  );
};

export default TicketPage;
