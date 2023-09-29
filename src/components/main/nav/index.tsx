import { TicketSearch } from "@/components/main/nav/ticketSearch";
import { AddTicketButton } from "@/components/main/addTicketBtn";
import { useAppDispatch } from "@/app/hooks";
import { openModal } from "@/features/addModal/addModalSlice";
import AddModalTicket from "../addTicketModal";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  return (
    <nav
      role="menubar"
      aria-label="secondary"
      className="flex space-between w-full items-center shadow-sm shadow-ligthGray gap-2 h-[70px]"
    >
      <AddModalTicket />
      <h5 className="text-blackColor text-base font-medium capitalize">
        my tickets
      </h5>
      <TicketSearch />
      <AddTicketButton handleClick={() => dispatch(openModal())} />
    </nav>
  );
};

export default SearchBar;
