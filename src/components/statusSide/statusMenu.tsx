import { StatusMenuItem } from "@/components/statusSide/statusMenuItem";
import { useStatusNum } from "@/hooks/useStatusNum";
export const StatusMenu = () => {
  const {
    error,
    isLoading,
    setActive,
    InProgressTicketsNum,
    active,
    tickets,
    OpenTicketsNum,
    ClosedTicketsNum,
    status,
  } = useStatusNum();
  if (isLoading) {
    return (
      <ul>
        <StatusMenuItem
          onActive={() => setActive("all")}
          counter={tickets?.length ?? 0}
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
          onActive={() => setActive("all")}
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
        counter={tickets?.length ?? 0}
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
