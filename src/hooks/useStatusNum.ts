import { useAppSelector } from "@/app/hooks";
import { useFetchStatus } from "@/hooks/useFetch";
import { useFilteredTickets } from "@/hooks/useFilteredTickets";
import { useState } from "react";

export const useStatusNum = () => {
  const { isLoading, error } = useFetchStatus();
  const { status } = useAppSelector((state) => state.status);
  const [active, setActive] = useState("all");
  const tickets = useAppSelector((state) => state.allTickets.tickets);
  const OpenTicketsNum = useFilteredTickets({ filter: "Open" }).length ?? 0;
  const ClosedTicketsNum = useFilteredTickets({ filter: "Closed" }).length ?? 0;
  const InProgressTicketsNum =
    useFilteredTickets({
      filter: "InProgress",
    }).length ?? 0;
  return {
    isLoading,
    error,
    status,
    active,
    setActive,
    tickets,
    OpenTicketsNum,
    ClosedTicketsNum,
    InProgressTicketsNum,
  };
};
