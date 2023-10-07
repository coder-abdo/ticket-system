import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import type { Status, StatusType } from "@/types";

interface Props {
  status: Status[];
  statue: StatusType;
}
export const StatusOptions: FC<Props> = ({ status, statue }) => {
  const bg =
    statue.toLowerCase() === "Open".toLowerCase()
      ? "yellow-500"
      : statue.toLowerCase() === "Closed".toLowerCase()
      ? "green-500"
      : "primaryBlue";
  const [open, setOpen] = useState(false);
  return (
    <Select open={open} onOpenChange={() => setOpen(!open)}>
      <SelectTrigger
        className={`bg-${bg} text-white outline-none border-none w-[360px] active:outline-none focus:ring-transparent`}
      >
        <SelectValue placeholder={statue.toString()} />
        {open ? <BsChevronUp /> : <BsChevronDown />}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {status?.map(({ id, name }) => (
            <SelectItem key={id} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
