import { useAppSelector } from "@/app/hooks";
import { StatusMenuItem } from "@/components/statusSide/statusMenuItem";
import { useFetchStatus } from "@/hooks/useFetch";

export const StatusMenu = () => {
  const { isLoading, error } = useFetchStatus();
  const { status } = useAppSelector((state) => state.status);
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
      {status.map((status) => (
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
