import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { StatusTickets } from "@/components/ticket/sidebar/dropDownMenu";
import { TicketsMenu } from "@/components/ticket/sidebar/TicketsMenu";
import { useAppSelector } from "@/app/hooks";
export const TicketSidebar = () => {
  const tickets = useAppSelector((state) => state.allTickets.tickets);
  return (
    <aside className="w-80">
      <div className="flex gap-2 items-center pl-2">
        <Link
          to={"/"}
          className="w-6 h-6 bg-ligthGray flex justify-center items-center"
        >
          <FaAngleLeft className="text-mediumGray" />
        </Link>
        <StatusTickets />
      </div>
      <TicketsMenu tickets={tickets} />
    </aside>
  );
};
