import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
export const StatusChart = () => {
  const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined = [10];
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#f7f6f6", "#5B8DEF", "#5FD971"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        offsetX: 20,
      },
    },
  };
  return (
    <div className="pl-10 relative">
      <Chart
        series={series.map((serie) => serie)}
        options={options}
        type="donut"
        width={"300"}
      />
      <div className="absolute flex flex-col items-center top-16 left-[40%]">
        <span className="text-blackColor font-medium text-xs">closed</span>
        <h3 className="text-[34px] font-bold text-blackColor">0</h3>
        <p className="text-xs text-mediumGray">Out of 0</p>
      </div>
    </div>
  );
};
