import SearchBar from "@/components/main/nav";
import { AllTickets } from "@/components/main/allTickets";
import { CreateTicketModal } from "@/components/main/createTicketModal";

const Main = () => {
  return (
    <section className="w-full">
      <CreateTicketModal />
      <SearchBar />
      <AllTickets />
    </section>
  );
};

export default Main;
