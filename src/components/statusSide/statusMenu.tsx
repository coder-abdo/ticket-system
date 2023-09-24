import { StatusMenuItem } from "@/components/statusSide/statusMenuItem";

export const StatusMenu = () => {
  const status = ["open", "in progress", "closed"];
  return (
    <ul>
      <StatusMenuItem counter={0} label="all tickets" status="all" isAll />
      {status.map((status, idx) => (
        <StatusMenuItem
          counter={0}
          label={status}
          status={status}
          isAll={false}
          key={`${status}-${idx}`}
        />
      ))}
    </ul>
  );
};
