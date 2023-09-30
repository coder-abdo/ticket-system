import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const StatusTickets = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Select onOpenChange={() => setIsOpen(!isOpen)}>
      <SelectTrigger className="w-32 border-none outline-none flex justify-start gap-2 items-center">
        <SelectValue placeholder="All Tickets" />
        {isOpen ? (
          <GoTriangleUp className="text-xl text-mediumGray" />
        ) : (
          <GoTriangleDown className="text-xl text-mediumGray" />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all tickets">all tickets</SelectItem>
          <SelectItem
            value="Open"
            className="relative before:absolute before:w-4 before:h-4 before:bg-[#FFD360] before:left-3 before:rounded-full"
          >
            Open
          </SelectItem>
          <SelectItem
            value="InProgress"
            className="relative before:absolute before:w-4 before:h-4 before:bg-[#5B8DEF] before:left-3 before:rounded-full"
          >
            In Progress
          </SelectItem>
          <SelectItem
            value="Closed"
            className="relative before:absolute before:w-4 before:h-4 before:bg-[#5FD971] before:left-3 before:rounded-full"
          >
            Closed
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
