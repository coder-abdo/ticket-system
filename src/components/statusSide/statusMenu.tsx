import { StatusMenuItem } from "@/components/statusSide/statusMenuItem";
import { useFetch } from "@/hooks/useFetch";

export const StatusMenu = () => {
  // const status = ["open", "in progress", "closed"];
  const { data, isLoading, error } = useFetch("http://localhost:8000/status");
  if (isLoading) {
    return (
      <ul>
        <StatusMenuItem counter={0} label="all tickets" status="all" isAll />
        <p>loading...</p>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <StatusMenuItem counter={0} label="all tickets" status="all" isAll />
        <p>error</p>
      </ul>
    );
  }
  return (
    <ul>
      <StatusMenuItem counter={0} label="all tickets" status="all" isAll />
      {data.map((status: { name: string; id: number }) => (
        <StatusMenuItem
          counter={0}
          label={status.name}
          status={status.name}
          isAll={false}
          key={status.id}
        />
      ))}
    </ul>
  );
};
