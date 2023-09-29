import emptyTickets from "@/assets/image.svg";
import AddModalTicket from "@/components/main/addTicketModal";
export const EmptyTickets = () => {
  return (
    <div className="flex h-full justify-center items-center flex-col">
      <img src={emptyTickets} alt="empty tickets" />
      <h4 className="text-blackColor font-semibold text-[18px] capitalize">
        no data to show
      </h4>
      <p className="text-sm text-mediumGray mb-8 mt-2">
        Create a new Ticket Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <AddModalTicket />
    </div>
  );
};
