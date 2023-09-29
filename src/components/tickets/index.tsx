import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
interface Props {
  tickets: Ticket[];
}
const Tickets: FC<Props> = ({ tickets }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company Name</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow
            key={ticket.id}
            className="text-center text-sm text-blackColor"
          >
            <TableCell className="flex gap-2 items-center">
              <span className="bg-[#D9D9D9] w-10 h-10 rounded-full" />
              Company Name
            </TableCell>
            <TableCell>{ticket.to}</TableCell>
            <TableCell>{ticket.from}</TableCell>
            <TableCell>Internal</TableCell>
            <TableCell>{format(new Date(), "dd MMM yyyy")}</TableCell>
            <TableCell
              className={`${
                ticket.status === "Open".toLowerCase()
                  ? "bg-[#fcf7e9] text-[#FFD360]"
                  : ticket.status === "Close".toLowerCase()
                  ? "bg-[#ecfaee] text-[#5FD971]"
                  : "bg-primaryBlue"
              }`}
            >
              {ticket.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Tickets;
