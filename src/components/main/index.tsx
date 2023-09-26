import SearchBar from "@/components/main/nav";
import { AllTickets } from "@/components/main/allTickets";

const Main = () => {
  return (
    <section className="w-full">
      <SearchBar />
      <AllTickets />
    </section>
  );
};

export default Main;
