import { AiOutlinePlus } from "react-icons/ai";
import { TicketSearch } from "@/components/main/nav/ticketSearch";
import { Button } from "@/components/ui/button";

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
      <Button className="bg-primaryBlue text-white hover:bg-white hover:text-primaryBlue border border-primaryBlue transition-colors">
        <AiOutlinePlus className="text-xl mr-2" />
        <span className="capitalize text-sm font-medium">new ticket</span>
      </Button>
    </nav>
  );
};

export default SearchBar;
