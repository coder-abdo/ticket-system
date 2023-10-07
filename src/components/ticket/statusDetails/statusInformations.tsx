import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TbTicket, TbClockHour4 } from "react-icons/tb";
export const StatusInformations = () => {
  return (
    <Tabs defaultValue="details" className="shadow-sm shadow-gray-300">
      <TabsList>
        <TabsTrigger
          className="text-primaryBlue flex items-center gap-1"
          value="details"
        >
          <TbTicket />
          <h5 className="text-base font-medium">Details</h5>
        </TabsTrigger>
        <TabsTrigger
          className="flex text-primaryBlue bg-blue-200 items-center gap-1"
          value="timeline"
        >
          <TbClockHour4 />
          <h5 className="text-base font-medium">Timeline</h5>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <h6 className="text-base">send by</h6>
      </TabsContent>
    </Tabs>
  );
};
