import { useAppDispatch } from "@/app/hooks";
import { setStatus } from "@/features/status/statusSlice";
import { getAllTickets } from "@/features/tickets/ticketsSlice";
import { fetchData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
export const useFetchStatus = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchData("http://localhost:8000/status"),
    queryKey: ["fetch-status"],
  });
  dispatch(setStatus(data));
  return { error, isLoading };
};
export const useFetchTickets = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchData("http://localhost:8000/tickets"),
    queryKey: ["tickets"],
  });
  dispatch(getAllTickets(data));
  return { error, isLoading };
};
