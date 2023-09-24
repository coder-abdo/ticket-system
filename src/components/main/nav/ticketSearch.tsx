import { BiSearch } from "react-icons/bi";
import { GrFilter } from "react-icons/gr";
export const TicketSearch = () => {
  return (
    <div className="flex flex-1 justify-around gap-2 items-center border-l border-r border-ligthGray px-2">
      <span className="text-xs text-mediumGray">view (0)</span>
      <div className="relative h-[38px] flex flex-1 items-center">
        <BiSearch className="text-mediumGray absolute top-3 left-2" />
        <input
          type="text"
          className="w-full pl-8 py-5 outline-none focus:border focus:border-secondaryBlue focus:rounded-sm"
          placeholder="Search..."
        />
      </div>
      <GrFilter className="text-blackColor text-xl hover:cursor-pointer" />
    </div>
  );
};
