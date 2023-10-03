import { useAppSelector } from "@/app/hooks";
import { useFetchTickets } from "@/hooks/useFetch";

export const useTickets = () => {
  const { error, isLoading } = useFetchTickets();
  const tickets = useAppSelector((state) => state.allTickets.tickets);
  return { error, isLoading, tickets };
};
