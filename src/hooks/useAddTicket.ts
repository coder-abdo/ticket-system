import { Ticket } from "@/types";
import { addTicket } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useAddTicket = () => {
  const { mutate, error, data, isLoading } = useMutation({
    mutationFn: (ticket: Ticket) =>
      addTicket(`${import.meta.env.VITE_BASE_URL}/tickets`, ticket),
    mutationKey: ["add-ticket"],
  });
  return { mutate, error, data, isLoading };
};
