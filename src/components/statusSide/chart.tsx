import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useFilteredTickets } from "@/hooks/useFilteredTickets";
export const StatusChart = () => {
  const OpenTicketsNum = useFilteredTickets({ filter: "Open" }).length;
  const ClosedTicketsNum = useFilteredTickets({ filter: "Closed" }).length;
  const InProgressTicketsNum = useFilteredTickets({
    filter: "InProgress",
  }).length;
  const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined = [
    OpenTicketsNum || 1,
    ClosedTicketsNum || 0,
    InProgressTicketsNum || 0,
  ];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      width: "100%",
    },
    colors: ["#FFD360", "#5B8DEF", "#5FD971"],
    dataLabels: {
      enabled: false,
    },
    labels: ["Open", "InProgress", "Closed"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
      },
    },
  };

  return (
    <div className="w-full relative pb-2">
      {series.length > 0 && (
        <Chart options={options} series={series} type="donut" />
      )}
      <div className="absolute flex flex-col items-center top-9 left-[34%]">
        <span className="text-blackColor font-medium text-xs">closed</span>
        <h3 className="text-[34px] font-bold text-blackColor">
          {ClosedTicketsNum}
        </h3>
        <p className="text-xs text-mediumGray">Out of 0</p>
      </div>
    </div>
  );
};
