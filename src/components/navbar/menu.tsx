import { Lang } from "@/components/navbar/lang";
import { Notification } from "@/components/navbar/notification";
import { User } from "@/components/navbar/user";

export const NavMenu = () => {
  return (
    <div className="flex items-center gap-10">
      <Lang />
      <Notification />
      <User />
    </div>
  );
};
