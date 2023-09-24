import { DatePicker } from "@/components/statusSide/datePicker";
import { StatusChart } from "@/components/statusSide/chart";
import { StatusMenu } from "@/components/statusSide/statusMenu";

const StatusSideBar = () => {
  return (
    <aside className="w-40 flex flex-col gap-2 items-center pt-5">
      <DatePicker />
      <StatusChart />
      <hr className="text-ligthGray text-[1px] w-9/12 mx-auto" />
      <StatusMenu />
    </aside>
  );
};

export default StatusSideBar;
