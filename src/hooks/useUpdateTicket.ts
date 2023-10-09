import { useAppDispatch } from "@/app/hooks";
import { Ticket } from "@/types";
import { createTicketShcema, updateTicket } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useImageDrop } from "./useDropImages";
import { updatedTicket } from "@/features/ticket/ticketSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "@/app/clientQuery";
import { closeEditModal } from "@/features/editTicketModal/editTicketModalSlice";

export const useUpdateTicket = (ticket: Ticket) => {
  console.log(import.meta.env.VITE_BASE_URL);
  const { mutate, error, isLoading } = useMutation({
    mutationFn: (data: Ticket) =>
      updateTicket(`${import.meta.env.VITE_BASE_URL}/tickets`, ticket.id, data),
    mutationKey: ["updateTicket"],
  });
  const dispatch = useAppDispatch();
  const { getInputProps, getRootProps } = useImageDrop();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof createTicketShcema>>({
    resolver: zodResolver(createTicketShcema),
    defaultValues: {
      subject: ticket.subject,
      from: ticket.from,
      to: ticket.to,
      description: ticket.description,
    },
  });
  const onHandleSubmit = (values: z.infer<typeof createTicketShcema>) => {
    const ticketValues = {
      id: ticket.id,
      status: ticket.status,
      ...values,
    };
    mutate(ticketValues, {
      onSuccess() {
        dispatch(updatedTicket(ticketValues));
        queryClient.invalidateQueries({
          queryKey: ["ticket"],
        });
        dispatch(closeEditModal());
      },
    });
  };

  return {
    dispatch,
    onHandleSubmit,
    register,
    error,
    isLoading,
    getInputProps,
    getRootProps,
    errors,
    handleSubmit,
  };
};
