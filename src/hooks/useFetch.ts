import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setStatus } from "@/features/status/statusSlice";
import { getAllTickets } from "@/features/tickets/ticketsSlice";
import { fetchData, getTicket } from "@/utils";
import { setTicket } from "@/features/ticket/ticketSlice";
export const useFetchStatus = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchData(`${import.meta.env.VITE_BASE_URL}/status`),
    queryKey: ["fetch-status"],
  });
  dispatch(setStatus(data));
  const status = useAppSelector((state) => state.status.status);
  return { error, isLoading, status };
};
export const useFetchTickets = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchData(`${import.meta.env.VITE_BASE_URL}/tickets`),
    queryKey: ["tickets"],
  });
  dispatch(getAllTickets(data));
  return { error, isLoading };
};
export const useFetchTicketById = (id: number) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useQuery({
    queryFn: () => getTicket(`${import.meta.env.VITE_BASE_URL}/tickets`, id),
    queryKey: ["ticket"],
  });
  dispatch(setTicket(data));
  const ticket = useAppSelector((state) => state.ticket.ticket);
  return { error, isLoading, ticket };
};
