import { useAppSelector } from "@/app/hooks";
import { StatusMenuItem } from "@/components/statusSide/statusMenuItem";
import { useFetchStatus } from "@/hooks/useFetch";
import { useFilteredTickets } from "@/hooks/useFilteredTickets";
import { useState } from "react";

export const StatusMenu = () => {
  const { isLoading, error } = useFetchStatus();
  const { status } = useAppSelector((state) => state.status);
  const [active, setActive] = useState("all");
  const tickets = useAppSelector((state) => state.allTickets.tickets);
  const OpenTicketsNum = useFilteredTickets({ filter: "Open" }).length ?? 0;
  const ClosedTicketsNum = useFilteredTickets({ filter: "Closed" }).length ?? 0 ;
  const InProgressTicketsNum = useFilteredTickets({
    filter: "InProgress",
  }).length ?? 0;
  if (isLoading) {
    return (
      <ul>
        <StatusMenuItem
          onActive={() => setActive(true)}
          counter={tickets.length}
          label="all tickets"
          status="all"
          isAll
        />
        <p>loading...</p>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <StatusMenuItem
          onActive={() => setActive(true)}
          counter={0}
          label="all tickets"
          status="all"
          isAll
        />
        <p>error</p>
      </ul>
    );
  }
  return (
    <ul className="w-full">
      <StatusMenuItem
        counter={tickets.length}
        label="all tickets"
        status="all"
        isAll
        active={active === "all"}
        onActive={() => setActive("all")}
      />
      {status.map((statue) => (
        <StatusMenuItem
          onActive={() => setActive(statue.name)}
          counter={
            statue.name.toLowerCase() === "Open".toLowerCase()
              ? OpenTicketsNum
              : statue.name.toLowerCase() === "Closed".toLowerCase()
              ? ClosedTicketsNum
              : InProgressTicketsNum
          }
          label={statue.name}
          status={statue.name}
          isAll={false}
          key={statue.id}
          active={active === statue.name}
        />
      ))}
    </ul>
  );
};
