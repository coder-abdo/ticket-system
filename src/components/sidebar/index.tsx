import logo from "@/assets/icon.svg";
import { SidebarListItems } from "@/components/sidebar/sidebrListItems";
export const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 min-w-[88px]  md:min-w-[192px]  h-screen flex flex-col items-center">
      <div className="flex flex-col items-center bg-primaryBlue w-full pt-3 pb-14">
        <img src={logo} alt="logo" />
        <span className="bg-ligthGray mt-3 block w-[88px] opacity-50 h-[2px]" />
      </div>
      <SidebarListItems />
    </aside>
  );
};
