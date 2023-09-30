import logo from "@/assets/ticket-logo.svg";
import { Lang } from "@/components/navbar/lang";
import { Notification } from "@/components/navbar/notification";
import { User } from "@/components/navbar/user";

export const TicketNavigation = () => {
  return (
    <nav className="flex justify-between items-center pl-8 py-8 pr-6">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-10">
        <Lang />
        <Notification />
        <User />
      </div>
    </nav>
  );
};
