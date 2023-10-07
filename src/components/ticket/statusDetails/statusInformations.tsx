import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFetchTicketById } from "@/hooks/useFetch";
import { FC } from "react";
import { TbTicket, TbClockHour4 } from "react-icons/tb";
import { Timeline } from "@/components/ticket/statusDetails/timeline";
import { Details } from "@/components/ticket/statusDetails/details";
import { Trigger } from "@/components/ticket/statusDetails/trigger";
interface Props {
  id: number;
}

export const StatusInformations: FC<Props> = ({ id }) => {
  const { ticket } = useFetchTicketById(id);
  return (
    <Tabs defaultValue="details" className="shadow-sm shadow-gray-300 p-5">
      <TabsList className="w-full bg-transparent">
        <TabsTrigger
          className="text-primaryBlue flex items-center gap-1 bg-blue-50"
          value="details"
        >
          <Trigger icon={TbTicket} title="Details" />
        </TabsTrigger>
        <TabsTrigger
          className="flex text-primaryBlue items-center gap-1 bg-blue-50"
          value="timeline"
        >
          <Trigger icon={TbClockHour4} title="Timeline" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="capitalize pt-10">
        <Details ticket={ticket} />
      </TabsContent>
      <TabsContent value="timeline">
        <Timeline />
      </TabsContent>
    </Tabs>
  );
};
