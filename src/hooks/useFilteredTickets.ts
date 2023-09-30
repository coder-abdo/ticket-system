import { queryClient } from "@/app/clientQuery";
import { useAppSelector } from "@/app/hooks";
import { useMemo } from "react";

interface Props {
  filter: "Open" | "Closed" | "InProgress";
}
export const useFilteredTickets = ({ filter }: Props) => {
  const tickets = useAppSelector((state) => state.allTickets.tickets);
  const filteredTickets =
    useMemo(
      () =>
        tickets?.filter(
          (ticket) => ticket.status.toLowerCase() === filter.toLowerCase(),
        ),
      [filter, tickets],
    ) ?? [];
  queryClient.invalidateQueries(["tickets"]);
  return filteredTickets;
};
