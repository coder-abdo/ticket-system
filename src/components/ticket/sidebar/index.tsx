import { FaAngleLeft } from "react-icons/fa";
import { StatusTickets } from "@/components/ticket/sidebar/dropDownMenu";
import { Link } from "react-router-dom";
export const TicketSidebar = () => {
  return (
    <aside className="w-80">
      <div className="flex gap-2 items-center">
        <Link
          to={"/"}
          className="w-6 h-6 bg-ligthGray flex justify-center items-center"
        >
          <FaAngleLeft className="text-mediumGray" />
        </Link>
        <StatusTickets />
      </div>
    </aside>
  );
};
