import { RiHome6Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import { SidebarListItem } from "@/components/sidebar/sidebarItem";

export const SidebarListItems = () => {
  return (
    <ul className="flex flex-col flex-1 bg-primaryBlue w-full pl-[18px]">
      <SidebarListItem icon={RiHome6Line} text="Home" />
      <SidebarListItem icon={CiUser} text="Profile" />
      <SidebarListItem icon={LuSettings} text="Settings" />
    </ul>
  );
};
