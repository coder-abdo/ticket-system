import { TicketSearch } from "@/components/main/nav/ticketSearch";
import { AddTicketButton } from "@/components/main/addTicketBtn";

const SearchBar = () => {
  return (
    <nav
      role="menubar"
      aria-label="secondary"
      className="flex space-between w-full items-center shadow-sm shadow-ligthGray gap-2 h-[70px]"
    >
      <h5 className="text-blackColor text-base font-medium capitalize">
        my tickets
      </h5>
      <TicketSearch />
      <AddTicketButton />
    </nav>
  );
};

export default SearchBar;
