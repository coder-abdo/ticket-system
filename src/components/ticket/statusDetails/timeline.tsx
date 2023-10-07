import { TbClockHour4 } from "react-icons/tb";
export const Timeline = () => {
  return (
    <>
      <div className="flex justify-center my-4">
        <div className="py-2 w-28 bg-ligthGray text-center text-mediumGray text-sm rounded">
          Today
        </div>
      </div>
      <div className="flex gap-2 mb-3 relative before:absolute before:w-[2px] before:h-[91%] before:top-5 before:left-3 before:bg-mediumGray ">
        <TbClockHour4 className="text-mediumGray text-2xl" />
        <div>
          <h4 className="text-blackColor font-semibold text-base mb-1">
            Yara Ayad Update the Ticket
          </h4>
          <h5 className="text-mediumGray text-sm">12:38 PM</h5>
          <p className="text-sm text-mediumGray">
            Status Updated from <span className="text-blackColor">Pending</span>{" "}
            to <span className="text-blackColor">in progress</span>
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <TbClockHour4 className="text-mediumGray text-2xl" />
        <div>
          <h4 className="text-blackColor font-semibold text-base mb-1">
            Yara Ayad Update the Ticket
          </h4>
          <h5 className="text-mediumGray text-sm">12:38 PM</h5>
          <p className="text-sm text-mediumGray">
            Status Updated from <span className="text-blackColor">Pending</span>{" "}
            to <span className="text-blackColor">in progress</span>
          </p>
        </div>
      </div>
    </>
  );
};
