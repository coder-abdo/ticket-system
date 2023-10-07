import { TbPencilMinus } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import { format } from "date-fns";
import { FC } from "react";
import { Ticket } from "@/types";
interface Props extends Ticket {}
export const Header: FC<Props> = ({ from }) => {
  return (
    <header className="flex justify-between items-center pb-4 border-b-[2px] border-b-[#F7F6F6]">
      <div className="flex gap-2">
        <div className="bg-[#68005E] w-16 h-16 rounded-full" />
        <div className="capitalize">
          <h2 className="text-blackColor font-medium text-xl mb-2">
            user name
          </h2>
          <h3 className="text-darkGray text-sm font-medium flex items-center">
            {format(new Date(), "dd MMM yyyy")}
            <span className="bg-[#D9D9D9] w-1 h-1 inline-block rounded-full mx-1" />
            From {from}
          </h3>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <TbPencilMinus className="text-3xl text-blackColor hover:cursor-pointer" />
        <FaRegTrashCan className="text-[#FF4444] text-2xl hover:cursor-pointer" />
      </div>
    </header>
  );
};
