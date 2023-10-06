import type { FC } from "react";
import { useFetchTicketById } from "@/hooks/useFetch";
import { Header } from "@/components/ticket/main/header";
import { TicketDetails } from "@/components/ticket/main/ticketDetails";

interface Props {
  id: number;
}

export const Main: FC<Props> = ({ id }) => {
  const { error, ticket, isLoading } = useFetchTicketById(id);
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error in fetching data</div>;
  }
  return (
    <div className="py-5 px-5 rounded-sm shadow-md shadow-gray-200 flex-1">
      <Header {...ticket} />
      <TicketDetails ticket={ticket} />
    </div>
  );
};
